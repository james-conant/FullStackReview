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
// TODO: add in database function to get array of all todos and res.send the results
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
// TODO: add in database function to add single to do to the table
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
// delete
// TODO: add in database function to remove a single to do item from the table
app.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    console.log("id from server", id);
    db.deleteTask(id, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    });
  });
  


// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


