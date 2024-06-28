const express=require("express")
const router = express.Router()
const db = require('../db/connectDB'); 
//get all todos
router.get('/todos', (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
});
  //create Todo
  router.post('/todos', (req, res) => {
    const { task } = req.body;
    db.query('INSERT INTO todos (task) VALUES (?)', [task], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
        }
        console.log(result)
      res.status(201).json({ id: result.insertId, task });
    });
  });
  // Delete todo
  router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Todo deleted successfully' });
    });
  });
  module.exports = router;