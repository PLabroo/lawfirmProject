// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middleware/auth');

// Define the contact form submission route
router.post('/',authMiddleware, articleController.createArticle);
router.get('/',articleController.getAllArticles);

module.exports = router;