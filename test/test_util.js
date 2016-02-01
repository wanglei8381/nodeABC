var util = require('util');
var EventEmitter = require("events");

/**
 * util.inspect(object[, options])
 * 常用于debug输出对象信息
 * options : {
 *  showHidden:默认false，true:不能枚举属性和符号属性也将打印，
 *  depth ：递归显示obj对象，默认2，如果设置null,表示无限递归,
 *  colors:默认false,true:ANSI color显示，
 *  customInspect：默认TRUE，
 * }
 *
 */
console.log(util.inspect(util, { showHidden: true, depth: null,colors:true }));


/**
 * util.format(format[, ...])
 * %s - 替换字符串.
 * %d - 替换数字
 * %j - 替换json对象，如果存在循环引用，显示'[Circular]'
 * %% - 替换其中一个
 */
console.log(util.format('%s:%d  %j  %%', 'foo', 12, {"a":"b","c":"d"},'wanglei','wanglei'));


/**
 * node提供的标准继承
 * util.inherits(constructor, superConstructor)
 * constructor：构造函数
 * superConstructor：父类的构造函数
 *
 */

function MyStream(){
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

var stream = new MyStream();

stream.on("data", function(data) {
  console.log('Received data: "' + data + '"');
})

stream.emit("data","It works!"); // Received data: "It works!"