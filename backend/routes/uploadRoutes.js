// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const authMiddleware = require('../middleware/auth');
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Directory where images will be stored
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Unique filename
//     }
// });
// const upload = multer({ storage });
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the contact form submission route
router.post('/uploadFile',authMiddleware,upload.single('image'),uploadController.uploadFile);
router.delete('/deleteFile/:deleteId',authMiddleware,uploadController.deleteFile);

module.exports = router;