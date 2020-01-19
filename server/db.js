var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'todos',
  insecureAuth: true
});
 
connection.connect(err => {
    if(err) {
        throw err;
    }
    console.log("now connected to the database")
});
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// create tasks

// add task
const addTask = (task, callback) => {
  connection.query(
    `INSERT INTO tasks (task) VALUES ("${task}")`,
    (err, data) => {
      if (err) throw err;
      else callback(null, data);
    }
  )
}

// get tasks
const getTasks = (callback) => {
  connection.query(
    "SELECT * FROM tasks", (err, data) => {
      if (err) throw err
      else callback(null, data)
    }
  )
}

// delete tasks
const deleteTask = (id, callback) => {
  console.log(id);
  connection.query(`DELETE FROM tasks WHERE id="${id}"`, (err, data) => {
    if (err) throw err;
    else callback(null, data);
  });
};

module.exports = {addTask, getTasks, deleteTask};
