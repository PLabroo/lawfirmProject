// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory for storing files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix); // Save the file with a unique name
    }
});

const upload = multer({ storage });

// Define the contact form submission route
router.post('/',authMiddleware,upload.single('image'), articleController.createArticle);
router.get('/',articleController.getAllArticles);

module.exports = router;