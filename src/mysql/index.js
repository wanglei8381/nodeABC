var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '42.96.172.127',
  user: 'root',
  password: '3g2win.com',
  database: 'crm_db'
});

connection.connect();

connection.query('SELECT * from clue limit 0,1', function (err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].id);
});

connection.end();