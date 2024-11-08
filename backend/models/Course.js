const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  discount: Number,
  price: Number
});

module.exports = mongoose.model('Course', courseSchema);
