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
app.get('/todos', (req, res) => {
    console.log('tryin to get a task')
    db.getTasks((err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})

// post
app.post("/todo", (req, res) => {
    var task = req.body.task
    console.log(task)
    db.addTask(task, (err, data) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


