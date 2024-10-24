// Model for Article
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category:{
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Article', articleSchema);
