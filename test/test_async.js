var async = require('async');

/*
 async.each([1, 2, 3, 4], function (x, cb) {
 console.log(x);
 if (x > 10) {
 cb('error');
 }
 }, function (err) {
 console.log(err);
 });
*/

 async.map([1,2,3,4],function(x, cb){
 cb(null,x*x);
 },function(err,result){
 console.log(err);
 console.log(result);
 });

/*
 async.filter([1,2,3,4],function(x, cb){

 if(x > 3){
 cb(true);
 }else{
 cb(false);
 }

 },function(result){
 console.log(result);
 });

 async.reject([1,2,3,4],function(x, cb){

 if(x > 3){
 cb(true);
 }else{
 cb(false);
 }

 },function(result){
 console.log(result);
 });

 */

/*
 var it = async.iterator([function(){
 console.log('123');
 },function(){
 console.log('456');
 }]);

 it()();
 //it.next()();

 */

/*
 process.nextTick(function() {
 console.log('nextTick2 callback');
 });
 process.nextTick(function() {
 var j = 0;
 for(var i =0;i<990000000;i++){
 j++;
 }
 console.log('nextTick3 callback'+j);
 });
 process.nextTick(function() {
 console.log('nextTick4 callback');
 });
 */

/*
 async.waterfall([function(callback){

 console.log('one');
 callback(null,'one');

 },function(arg , callback){

 console.log(arg+'two');
 callback(null,'two');

 },function(arg, callback){

 console.log(arg+'three');
 callback(null,'three');

 }],function(err,result){

 console.log('result = ' + result);

 });

 */
/*
 var tasks = [];

 for (var i = 0; i < 5; i++) {
 tasks[i] = (function (cb) {
 var j = i;
 return function (cb) {
 cb(null, j);

 };
 })();
 }


 async.parallel(tasks, function (err, result) {

 console.log(result instanceof Array);

 });
 */

/**
 * 串行执行（顺序执行）,
 * 当出错时，后面的函数停止执行，返回已有的结果.
 * 第一个参数可以是数组或对象，
 * 如果数组，返回的结果也是对应顺序的数组，
 * 如果是对象，返回的结果也是对象，结果的key是对象的key
 */

/*
 async.series([
 function(callback){
 callback(null, {name:'王磊'});
 },
 function(callback){
 callback(null, 2);
 }
 ] ,function(err, results) {
 console.log(err);
 console.log(results);
 });

 async.series({
 one: function(callback){
 callback(null, {name:'王磊'});
 },
 two: function(callback){
 callback(null, 2);
 }
 },function(err, results) {
 console.log(err);
 console.log(results);
 });*/

/**
 * 瀑布流,和series类似，不同是第一个参数必须是数组，
 * waterfall每个函数产生的值，都将传给下一个函数，
 * 最终的结果是最后一个函数的返回的值,
 * 如果出错，后面的函数停止执行，
 * 最终的结果是该函数的返回的值
 */
/*
 async.waterfall([
 function(callback){
 callback(null, 'one', 'two');
 },
 function(arg1, arg2, callback){
 // arg1 now equals 'one' and arg2 now equals 'two'
 callback(null, 'three');
 },
 function(arg1, callback){
 // arg1 now equals 'three'
 callback(null, 'done',"haha");
 }
 ], function (err, result,result2) {
 // result now equals 'done'
 console.log(result);
 console.log(result2);
 });
 */

/**
 * parallel并行执行多个函数,和series类似,
 * 不同之处在于，每个函数都是立即执行，不需要等待其它函数先执行。
 * 传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序
 */

/*async.parallel([
    function (callback) {
      callback(null, 'one');
    },
    function (callback) {
      callback(null, 'two');
    },function (callback) {
      callback(null, 'three','four');
    }
  ],
  function (err, result) {
    console.log(result[2][1]);
  });*/

/**
 * parallelLimit函数和parallel类似,但是它多了一个参数limit。
 * limit参数限制任务只能同时并发一定数量，而不是无限制并发
 */
/*
 async.parallelLimit([
 function(callback){
 callback(null, 'one');
 },
 function(callback){
 callback(null, 'two');
 }
 ],
 2,
 function(err, results){
 console.log(results);
 });

 */
/*
 async.map([{name:'wanglei'},2,3,4],function(x, cb){
 cb(null,x);
 },function(err,result){
 console.log(err);
 console.log(result);
 });
 */

