/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const Blog = require('./Blog');
const path = require('path');
const fileUpload = require('express-fileupload');
const fs = require('fs');

// Use express-fileupload middleware
router.use(fileUpload());

// Define the path to store uploaded files
const uploadPath = path.join(__dirname, 'uploads');
// GET all blogs
router.get('/api/blogs', async (req, res) => {
  console.log('Received GET request to /api/blogs');
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Error fetching blogs' });
  }
});

// Serve uploaded files statically
router.use('/uploads', express.static(uploadPath));

// Helper function to handle content parsing
const parseContent = (content) => {
  try {
    return JSON.parse(content);
  } catch (error) {
    return [];
  }
};

// Function to check if a URL is a blob URL
const isBlobUrl = (url) => url.startsWith('blob:');

// POST a new blog with file uploads (image and video)
router.post('/api/blogs', async (req, res) => {
  try {
    const { title, content, link } = req.body;
    const newBlog = new Blog({ title, content: [], link });

    if (content && Array.isArray(content)) {
      content.forEach((item) => {
        // Check if the item URL is a blob URL, if so, skip it
        if (!isBlobUrl(item.url)) {
          newBlog.content.push(item);
        }
      });
    }

    if (req.files && req.files.files) {
      const files = req.files.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = `${Date.now()}_${file.name}`;
        await file.mv(path.join(uploadPath, fileName));

        // Store the relative path or URL in the database
        if (file.mimetype.startsWith('image')) {
          newBlog.content.push({ type: 'image', url: `/uploads/${fileName}` });
        } else if (file.mimetype.startsWith('video')) {
          newBlog.content.push({ type: 'video', url: `/uploads/${fileName}` });
        }
      }
    }

    await newBlog.save();
    res.status(201).json({ message: 'Blog added successfully' });
  } catch (error) {
    console.error('Error adding blog:', error);
    res.status(500).json({ error: 'Error adding blog' });
  }
});

// PUT route to update an existing blog by ID
router.put('/api/blogs/:id', async (req, res) => {
  try {
    const { title, content, link } = req.body;
    const existingBlog = await Blog.findById(req.params.id);

    if (!existingBlog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    existingBlog.content = []; // Clear existing content

    if (content && Array.isArray(content)) {
      content.forEach((item) => {
        // Check if the item URL is a blob URL, if so, skip it
        if (!isBlobUrl(item.url)) {
          existingBlog.content.push(item);
        }
      });
    }

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileName = `${Date.now()}_${file.name}`;
      await file.mv(path.join(uploadPath, fileName));
      existingBlog.imageUrl = `/uploads/${fileName}`;
    }

    if (req.files && req.files.video) {
      const video = req.files.video;
      const videoName = `${Date.now()}_${video.name}`;
      await video.mv(path.join(uploadPath, videoName));
      existingBlog.videoUrl = `/uploads/${videoName}`;
    }

    if (title) {
      existingBlog.title = title;
    }

    if (link) {
      existingBlog.link = link;
    }

    await existingBlog.save();
    res.json(existingBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Error updating blog' });
  }
});

// DELETE route to delete a blog post by ID
router.delete('/api/blogs/:id', async (req, res) => {
    try {
      const blogId = req.params.id;
      const deletedBlog = await Blog.findByIdAndRemove(blogId);
  
      if (!deletedBlog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
  
      if (typeof deletedBlog.imageUrl === 'string') {
        const imagePath = path.join(uploadPath, deletedBlog.imageUrl.substring('/uploads/'.length));
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
  
      if (typeof deletedBlog.videoUrl === 'string') {
        const videoPath = path.join(uploadPath, deletedBlog.videoUrl.substring('/uploads/'.length));
        if (fs.existsSync(videoPath)) {
          fs.unlinkSync(videoPath);
        }
      }
  
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ error: 'Error deleting blog' });
    }
  });
  
  module.exports = router;
