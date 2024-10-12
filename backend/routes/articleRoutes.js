// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const multer = require('multer');
const authMiddleware = require('../middleware/auth');

const storage = multer.memoryStorage();

const upload = multer({ storage });

// Define the contact form submission route
router.post('/',authMiddleware,upload.single('image'), articleController.createArticle);
router.get('/',articleController.getAllArticles);

module.exports = router;