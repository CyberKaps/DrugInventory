const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Drug Schema
const drugSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  price: Number,
  expirationDate: Date,
});

// Drug Model
const Drug = mongoose.model('Drug', drugSchema);

// Route to get out-of-stock drugs
app.get('/api/out-of-stock', async (req, res) => {
  try {
    // Find drugs where stock is 0 or less
    const outOfStockDrugs = await Drug.find({ stock: { $lte: 0 } });
    res.json(outOfStockDrugs);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Add Drug Route
app.post('/api/add-drug', async (req, res) => {
    const { name, stock, price, expirationDate } = req.body;
    try {
      const newDrug = new Drug({
        name,
        stock,
        price,
        expirationDate,
      });
      await newDrug.save();
      res.status(201).json({ message: 'Drug added successfully', drug: newDrug });
    } catch (err) {
      res.status(500).json({ message: 'Failed to add drug', error: err.message });
    }
  });
  