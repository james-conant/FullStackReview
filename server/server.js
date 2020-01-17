const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
const app = express();
const port = 3000;

// what the server is looking for
app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

// get 
app.get('/todos', (req, res) => console.log('hellooooooooooooo'))

// post

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


