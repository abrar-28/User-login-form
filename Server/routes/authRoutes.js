
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signin route
router.post('/signin', authController.signin);

// Signup GET route (for browser access)
router.get('/signup', (req, res) => {
  res.send('Signup page');
});

// Signup POST route
router.post('/signup', authController.signup);

module.exports = router;
