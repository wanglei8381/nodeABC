/**
 * ###request 所有可枚举的属性
 *
 _readableState : object
 readable : boolean
 domain : object
 _events : object
 _maxListeners : number
 socket : object
 connection : object
 httpVersion : string
 complete : boolean
 headers : object
 trailers : object
 _pendings : object
 _pendingIndex : number
 url : string
 method : string
 statusCode : object
 client : object
 _consuming : boolean
 _dumped : boolean
 httpVersionMajor : number
 httpVersionMinor : number
 upgrade : boolean
 setTimeout : function
 read : function
 _read : function
 destroy : function
 _addHeaderLine : function
 _dump : function
 push : function
 unshift : function
 setEncoding : function
 pipe : function
 unpipe : function
 on : function
 addListener : function
 resume : function
 pause : function
 wrap : function
 setMaxListeners : function
 emit : function
 once : function
 removeListener : function
 removeAllListeners : function
 listeners : function
 */

var http = require("http");

global.LOG = console.log;
global.ERR = console.error;

//定义对象循环对象
Object.defineProperty(Object.prototype, 'each', {value: function(callback){
  if(this == null || typeof this !== 'object') {
    ERR('The object is empty or not a object');
    return;
  }
  for (var key in this) {
    callback(this[key], key, this);
  }
}, enumerable: false});

http.createServer(function(req,res){
  if(req.url === '/favicon.ico') {
    res.end();
    return;
  }

  /*for(var key in req) {
    LOG(key + ' : ' + typeof(req[key]) );
  }*/
  LOG(req.method);
  LOG(req.httpVersion);
  LOG(req.url);
  req.headers.each(function(val,key){
    LOG(key +' : ' + val);
  });

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>hello wolrd</h1>');
}).listen(8888);

LOG('##########Server running##################');