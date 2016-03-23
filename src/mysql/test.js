var jdbc_options = {
  host: '42.96.172.127',
  port: 3306,
  user: 'root',
  password: '3g2win.com',
  database: 'crm_db'
};

var baseJdbc = require('./baseJdbc')(jdbc_options);

 baseJdbc.query('SELECT * from clue limit 0,1', function (err, results) {
 //console.log(err, results);
 });


 baseJdbc.query({
 sql: 'SELECT * from custom limit ?,?',
 values: [0, 2]
 }, function (err, results) {
 console.log(err, results);
 });

/**
 {
  fieldCount: 0,
  affectedRows: 1,//影响的条数
  insertId: 1, //插入的ID
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
 */
/*baseJdbc.exec('insert into t_user(name) values("lier")', function (err, results) {
 console.log(err, results);
 });*/

/**
 {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1 }
 */
/*baseJdbc.exec({sql: 'update t_user set name = ? where id = ?', values: ['lisi', 1]}, function (err, results) {
 console.log(err, results);
 });*/

/**
 {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
 */
/*
 baseJdbc.exec({sql: 'delete from t_user where id = ?', values: [1]}, function (err, results) {
 console.log(err, results);
 });*/


/*baseJdbc.exec([{
  sql: 'update t_user set name = ? where id = ?',
  values: ['lisi', 2],
  callback: function (ret, callback) {
    console.log('#######################', ret);
    callback(null, ret);
  }
}, 'insert into t_user(name) values("wanglei")'], function (err, results) {
  console.log(err, results);
});*/

/**
 [ OkPacket {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    serverStatus: 3,
    warningCount: 0,
    message: '(Rows matched: 1  Changed: 1  Warnings: 0',
    protocol41: true,
    changedRows: 1 },
 OkPacket {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    serverStatus: 3,
    warningCount: 0,
    message: '',
    protocol41: true,
    changedRows: 0 } ]
 */
/*
baseJdbc.exec([{
  sql: 'update t_user set name = ? where id = ?',
  values: ['lisi', 2]
}, 'insert into t_user(name) values("wanglei")'], function (err, results) {
  console.log(err, results);
});*/
