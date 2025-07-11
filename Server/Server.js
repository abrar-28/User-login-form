
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());

app.use(express.static(__dirname));
app.use(express.json());

// Routes
app.use('/', authRoutes);


// Connect to MongoDB and start server using async/await
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // Log the full error stack for debugging
    if (err && err.stack) {
      console.error(err.stack);
    }
  }
};

startServer();
