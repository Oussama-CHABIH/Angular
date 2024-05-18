// backend/routes/posts.js

const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Require the database connection


// Logic to retrieve and send posts
router.get('/', (req, res) => {
    db.all('SELECT * FROM posts', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});


  // Logic to create a new post
  router.post('/', (req, res) => {
    const { title, content } = req.body;
    db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Post created successfully', id: this.lastID });
    });
  });



  // Logic to delete a 
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    db.run('DELETE FROM posts WHERE post_id = ?', postId, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Post deleted successfully' });
    });
});

module.exports = router;
