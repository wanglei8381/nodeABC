const net = require('net')
const server = net.createServer()
server.listen(8080, '127.0.0.1')

server.on('connection', function (client) {
  var chunk = ''
  client.setEncoding('utf8')
  client.on('data', function (data) {
    console.log(data)
    chunk += data
  })

  client.on('end', function (data) {
    console.log(data)
    if (data) {
      chunk += data
    }
    console.log(chunk)
  })

  client.end('HTTP/1.1 200 OK\nOK')
})
