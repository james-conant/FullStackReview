const mysql = require("mysql")

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'todos',
  insecureAuth: true
});
 
connection.connect(err => {
    if(err) {
        throw err;
    }
    console.log("now connected to the database")
});
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
