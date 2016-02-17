var mysql = require('mysql');

var pool = mysql.createPool({
  host: '42.96.172.127',
  port: 3306,
  user: 'root',
  password: '3g2win.com',
  database: 'crm_db'
});

pool.getConnection(function (err, connection) {
  if (err) {
    console.error('mysql connection error:', err.stack);
    return;
  }

  connection.query('SELECT * from clue limit 0,1', function (err, rows) {
    if (err) {
      console.error('mysql query error:', err.stack);
      return;
    }
    console.log('clue', rows[0]);
    connection.release();
  });
});

pool.getConnection(function (err, connection) {
  if (err) {
    console.error('mysql connection error:', err.stack);
    return;
  }

  connection.query('SELECT * from custom limit 0,1', function (err, rows) {
    if (err) {
      console.error('mysql query error:', err.stack);
      return;
    }
    console.log('custom', rows[0]);
    connection.release();
  });
});