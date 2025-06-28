const express = require('express');
const router = express.Router();
const Post = require('../model/Posts');

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, description, user_id, imageUrl } = req.body;

        const newPost = new Post({
            title,
            description,
            user_id,
            imageUrl
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        res.json({ message: "Post supprimé", post: deletedPost });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
