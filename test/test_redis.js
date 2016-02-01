var RedisPool = require("../src/redis/redis_pool");


new RedisPool({db: 1, host: '192.168.1.183'}).acquire(function (client) {
  if (!client) return;
  //client.set("string key", "string val", RedisPool.redis.print);
  //console.log('string key',client.get("string key"));
  //for (var key in client) {
  //  console.log(key);
  //}

  client.set("string key2", "string val", "EX", 600, RedisPool.redis.print);

  /**
   * 检查key是否存在
   * 若 key 存在，返回 1 ，否则返回 0 。
   * data：0/1
   */
  /*client.EXISTS("string key", function (err, data) {
   console.log(err, data);
   });*/

  /**
   * 哈希操作
   * data:'OK',成功
   */
  /* client.HMSET('FILE::CHACHE', {name: 'wanglei2', age: 'lillei3'}, function (err, data) {
   console.log(err, data);
   });

   client.HGET('FILE::CHACHE', 'name', function (err, data) {
   console.log(err, data);
   });

   client.HMGET('FILE::CHACHE', 'name', 'age', function (err, data) {
   console.log(err, data);
   });

   client.HMSET('FILE::CHACHE', {name: 'wanglei2', age: 'lillei3'}, function (err, data) {
   console.log(err, data);
   });

   client.HMGET('FILE::CHACHE', ['name', 'age'], function (err, data) {
   console.log(err, data);
   });*/

});
