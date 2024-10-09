// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Define the contact form submission route
router.post('/login', loginController.login);
router.post('/register', loginController.register);

module.exports = router;