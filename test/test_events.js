var util = require("util");
var events = require("events");//EventEmitter通过events模块来访问

function MyStream() {//新建一个类
  //events.EventEmitter.call(this);
}

util.inherits(MyStream, events.EventEmitter);//使这个类继承EventEmitter

MyStream.prototype.write = function (data) {//定义一个新方法
  this.emit("data", data);//在此触发名为"data"事件
}

var stream = new MyStream();

stream.on("data", function (data) {//注册监听器，监听名为"data"事件
  console.log('Received data: "' + data.msg + '"');
})
stream.write({msg: "It works!"}); // Received data: "It works!"