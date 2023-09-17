/* eslint-disable no-undef */
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'image', 'video'], // Enforce specific content types
    required: true,
  },
  data: {
    type: String,
    required: function () {
      // Make 'data' required for 'text' type only
      return this.type === 'text';
    },
  },
  url: {
    type: String,
    required: function () {
      // Make 'url' required for 'image' and 'video' types only
      return ['image', 'video'].includes(this.type);
    },
  },
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: [contentSchema],
  link: String,
});

module.exports = mongoose.model('Blog', blogSchema);