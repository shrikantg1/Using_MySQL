const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/connectDB'); 

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});
