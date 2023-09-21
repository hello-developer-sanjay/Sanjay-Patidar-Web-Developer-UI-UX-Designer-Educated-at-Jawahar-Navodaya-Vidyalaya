/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { ObjectId } = require('mongoose').Types; // Import ObjectId

require('dotenv').config();

const app = express();
const allowedOrigins = [
  'https://sanjay-developer-portfolio.vercel.app',

  'http://localhost:5173',
  // Add more domains if needed
];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(express.json());

const port = process.env.PORT || 5000;
const mongoURIMyDB = process.env.MONGODB_URI_MYDB;

mongoose
  .connect(mongoURIMyDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB (mydb)');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB (mydb):', error);
  });

const Feedback = mongoose.model('feedback', {
  name: String,
  email: String,
  feedback: String,
});
const Query = mongoose.model('query', { name: String, email: String, query: String });
const Certification = mongoose.model('certification', { title: String, imageUrl: [String] });
const Project = mongoose.model('project', {
  category: String,
  title: String,
  description: [String],
  additionalDetails: [String],
  // Add more fields as needed
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/certifications', async (req, res) => {
  try {
    const certifications = await Certification.find();
    res.json(certifications);
  } catch (error) {
    console.error('Error fetching certifications:', error);
    res.status(500).json({ error: 'Error fetching certifications' });
  }
});

app.get('/api/certifications/:title', async (req, res) => {
  try {
    const title = req.params.title;
    // Query your MongoDB collection to find the certification by title
    const certification = await Certification.findOne({ title });
    if (!certification) {
      return res.status(404).json({ error: 'Certification not found' });
    }
    // Return the certification details as JSON
    res.json(certification);
  } catch (error) {
    console.error('Error fetching certification details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    if (category === 'all') {
      const projects = await Project.find();
      res.json(projects);
    } else {
      const projects = await Project.find({ category });
      res.json(projects);
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

app.get('/api/projects/details/:id', async (req, res) => {
  try {
    const id = req.params.id;

    console.log('Received request for project with ID:', id); // Log the ID received

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid project ID:', id); // Log invalid ID
      return res.status(400).json({ error: 'Invalid project ID' });
    }

    // Use findById to query the project by its ObjectId
    const project = await Project.findById(id);

    console.log('Project data retrieved:', project); // Log the project data retrieved

    if (!project) {
      console.log('Project not found'); // Log if project not found
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error fetching project details:', error);
    res.status(500).json({ error: 'Error fetching project details' });
  }
});








app.post('/api/submit-feedback', async (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting feedback' });
  }
});

app.post('/api/submit-query', async (req, res) => {
  try {
    const { name, email, query } = req.body;
    const newQuery = new Query({ name, email, query });
    await newQuery.save();
    res.status(201).json({ message: 'Query submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting query' });
  }
});

const blogsRouter = require('./blogs');
app.use(blogsRouter);

app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
