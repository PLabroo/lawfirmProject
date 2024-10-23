// db.js

const mongoose = require('mongoose');
require('dotenv').config();

 
const connectDB = async () => {
    try {
        // await mongoose.destroy();
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            maxPoolSize: 1, // Maximum number of connections in the pool
            // minPoolSize: 1, // Minimum number of connections in the pool
            // // serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if no server is available
            // socketTimeoutMS: 45000 //
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;