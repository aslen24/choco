const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'chocovaleria'
})
connection.connect((err)=>{
  err ? console.error(err):console.log('DB Connected');
})

module.exports = connection;