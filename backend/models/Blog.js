const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  publishTime: Date
});

module.exports = mongoose.model('Blog', blogSchema);
