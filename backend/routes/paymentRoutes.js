const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

router.post('/', async (req, res) => {
  const { courseId, paymentMethod } = req.body;
  try {
    const transaction = new Transaction({
      courseId,
      paymentMethod,
      status: 'Success'
    });
    await transaction.save();
    res.json({ message: 'Payment successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment' });
  }
});

module.exports = router;
