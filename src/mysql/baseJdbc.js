var mysql = require('mysql');
var async = require('async');

//连接池
var pool;

var proto = module.exports = function (options) {
  proto.pool = pool = mysql.createPool(options);
  return proto;
};

//查询操作
proto.query = function (options, callback) {

  pool.getConnection(function (err, connection) {
    if (err) {
      console.error('mysql connection error:', err.stack);
      return callback(err);
    }

    unify(options, connection, function (err, rows) {
      connection.release();
      callback(err, rows);
    });

  });

};


//增删改操作
proto.exec = function (options, callback) {
  var _this = this;
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error('mysql connection error:', err.stack);
      return callback(err);
    }

    if (Array.isArray(options)) {
      var fns = options.map(function (item, index) {
        return function (callback) {

          //执行数据库操作
          unify(item, connection, function (err, ret) {
            if (err) return callback(err);
            //如果每个操作有回调函数，执行，注意（在回调函数中执行callback，否则挂起）
            if (typeof item.callback === 'function') {
              item.callback(ret, callback);
            } else {
              callback(null, ret);
            }
          });

        };
      });

      //开启事务
      connection.beginTransaction(function (err) {
        if (err) {
          console.error('mysql begin transaction error:', err.stack);
          return callback(err);
        }

        async.parallel(fns, function (err, result) {

          if (err) {
            console.error('mysql exec error:', err.stack);
            connection.rollback(function () {
              callback(err);
            });
          } else {
            //事务提交
            connection.commit(function (err) {
              if (err) {
                return connection.rollback(function () {
                  callback(err);
                });
              }
              callback(null, result);
            });
          }

        });

      });

    } else {
      unify(options, connection, function (err, rows) {
        connection.release();
        callback(err, rows);
      });
    }

  });

};

function unify(options, connection, callback) {
  var sql;
  if (typeof options === 'string') {
    sql = options;
  } else {
    sql = options.sql;
  }
  console.log('SQL : ' + sql);

  connection.query(options, function (err, rows) {
    if (err) {
      console.error('mysql query error, SQL:', sql, err.stack);
      return callback(err);
    }
    callback(null, rows);
  });

};