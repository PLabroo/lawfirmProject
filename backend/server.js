// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

const loginRoutes = require('./routes/loginRoutes');
const contactRoutes = require('./routes/contactRoutes');
const articleRoutes = require('./routes/articleRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');


app.use('/auth',loginRoutes);
app.use('/contactForm', contactRoutes); 
app.use('/create', articleRoutes);
app.use('/articlesList', articleRoutes);

app.use(errorMiddleware)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});