// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const newsLetterController = require('../controllers/newsLetterController');

// Define the contact form submission route
router.post('/', newsLetterController.subscribe);

module.exports = router;