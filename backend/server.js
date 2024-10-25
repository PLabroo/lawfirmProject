// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

connectDB();

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const loginRoutes = require('./routes/loginRoutes');
const contactRoutes = require('./routes/contactRoutes');
const articleRoutes = require('./routes/articleRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const newsLetterRoutes = require('./routes/newsLetterRoutes');


app.use('/auth',loginRoutes);
app.use('/contactForm', contactRoutes); 
app.use('/create', articleRoutes);
app.use('/articlesList', articleRoutes);
app.use('/file',uploadRoutes)
app.use('/subscribeToNewsletter',newsLetterRoutes);

app.use(errorMiddleware)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});