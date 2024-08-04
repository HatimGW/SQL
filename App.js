const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'HASANJI-TECH',
  user: 'HatimGW',
  password: 'Hatim@123',
  database: 'FirstTable'
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the MySQL database.');
});

connection.query(`UPDATE myTable SET mob = '7878787867' WHERE id = 2`, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }
    console.log('Query results:', results);
  });

connection.query(`SELECT * FROM mytable`, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end(error => {
  if (error) {
    console.error('Error ending the connection:', error);
    return;
  }
  console.log('Database connection closed.');
});
