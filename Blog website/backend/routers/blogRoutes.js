const express=require("express")
const router = express.Router();
const db = require('../db/connectDB'); 
const multer = require('multer');
const path = require('path');
const fs = require('fs');
router.get('/', (req, res) => {
    res.send('Hello World');
  });
  router.use('/uploads', express.static('uploads')); 
  // Multer configuration for handling file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Rename the uploaded file
    }
  });
  
  const upload = multer({ storage: storage });
  
  // Create a new post
  router.post('/api/posts', upload.single('image'), (req, res) => {
    const { title, content } = req.body;
    let imageUrl = null;
  
    if (req.file) {
      // Convert image path to URL
      imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }
  
    const query = 'INSERT INTO posts (title, content, image) VALUES (?, ?, ?)';
    db.query(query, [title, content, imageUrl], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: result.insertId, title, content, image: imageUrl });
    });
  });
  
  // Get all posts
  router.get('/api/posts', (req, res) => {
    const query = 'SELECT * FROM posts ORDER BY created_at DESC';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  });
  
  // Get a single post
  router.get('/api/posts/:id', (req, res) => {
    const query = 'SELECT * FROM posts WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }
      res.json(results[0]);
    });
  });
  
  // Update a post
  router.put('/api/posts/:id', (req, res) => {
    const { title, content } = req.body;
    const query = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
    db.query(query, [title, content, req.params.id], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }
      res.json({ id: req.params.id, title, content });
    });
  });
  
  // Delete a post
  router.delete('/api/posts/:id', (req, res) => {
    const query = 'DELETE FROM posts WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }
      res.json({ message: 'Post deleted successfully' });
    });
  });

  module.exports=router