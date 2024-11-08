const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content, publishTime } = req.body;
  try {
    const blog = new Blog({ title, content, publishTime });
    await blog.save();
    res.json({ message: 'Blog post scheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling blog post' });
  }
});

module.exports = router;
