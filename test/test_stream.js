const { Readable, Writable } = require('stream')
const util = require('util');
const debuglog = util.debuglog('test_stream');

{
  const r = new Readable({
    encoding: 'utf8',
    highWaterMark: 10,
    read() {
      debuglog('__read__')
    }
  });

  r.pause()
  r.on('data', function (data) {
    console.log('data=', data)
  })
  console.log(r.push('foo'))
  console.log(r.push('foo'))
  console.log(r.push('foo'))
  r.read(3)
  console.log(r.push('foo'))
  // console.log(r._readableState)
  //
  // r.on('resume', function () {
  //   console.log('resume')
  // })
  //
  // r.on('end', function (data) {
  //   console.log('end=', data)
  // })
}

// {
//   const r = new Readable({
//     encoding: 'utf8',
//     read() {}
//   });
//
//   r.on('readable', function () {
//     console.log(r._readableState.length)
//     // console.log('====readable====', r.read())
//   })
//
//   process.nextTick(() => {
//     r.push('foo')
//   })
//
//   process.nextTick(() => {
//     r.push('bar')
//   })
//
//   process.nextTick(() => {
//     r.push('quo')
//   })
//
//   process.nextTick(() => {
//     r.push(null)
//   })
//
// }