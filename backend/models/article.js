// Model for Article
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    category:{
        type: String,
    },
    description:{
        type: String,
        required: true
    },
    image: {
        data: Buffer, // Store the binary data
        contentType: String 
    }
});

module.exports = mongoose.model('Article', articleSchema);
