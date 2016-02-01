var net = require('net');
var client = net.connect({
    port: 27017,
    host: '127.0.0.1',
    path: 'mongo'
  },
  function() { //'connect' 监听器
    console.log('client connected');
    client.write('world!\r\n');
  });
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {
  console.log('客户端断开连接');
});