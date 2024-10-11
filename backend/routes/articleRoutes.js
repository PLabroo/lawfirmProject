// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({ storage });

// Define the contact form submission route
router.post('/',upload.single('image'), articleController.createArticle);
module.exports = router;