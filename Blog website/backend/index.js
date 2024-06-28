const express = require('express');
const app = express();


const port = 3000;

const cors = require("cors")
const  blogRoutes =require ("./routers/blogRoutes")
app.use(cors())

app.use(express.json());
app.use("/",blogRoutes)
app.listen(port, () => {
  console.log('Server is running on port', port);
});
