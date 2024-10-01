// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define the contact form submission route
router.post('/', contactController.sendContactForm);

module.exports = router;