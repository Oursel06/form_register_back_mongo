const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    user_id: { type: Number, required: true }, 
    date: { type: Date, required: true, default: Date.now },
    imageUrl: { type: String }
});

module.exports = mongoose.model('Post', postSchema);