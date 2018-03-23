const net = require('net')
const client = new net.Socket()

client.connect(8080, '127.0.0.1', function () {
  console.log('client.connect')
  client.write('hello')
  client.end()
})

client.setEncoding('utf8')

client.on('data', function (data) {
  console.log('data:', data)
})

client.on('close', function () {
  console.log('Connection closed')
})