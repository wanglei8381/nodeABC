/**
 * javascript错误类型详解
 *
 * （1）SyntaxError
 *  SyntaxError是解析代码时发生的语法错误
 *
 * （2）ReferenceError
 *  ReferenceError是引用一个不存在的变量时发生的错误。
 *  另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果或者this赋值。
 *
 * （3）RangeError
 *  RangeError是当一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。
 *
 * （4）TypeError
 *  TypeError是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。
 *
 * （5）URIError
 *  URIError是URI相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
 *
 * （6）EvalError
 *  eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再在ES5中出现了，只是为了保证与以前代码兼容，才继续保留。
 *
 * （7）Error
 *  所有错误类型的父类
 *
 * （8）自定义错误
 *  继承Error，完成特定的功能
 */

var util = require('util');

var Map = {
  "DatabaseError" : "Database Error",
  "UnknownError" : "Unknown Error"
};

for(var key in Map) {

  exports[key] = (function(){

    var massage = Map[key];
    return function (msg, constructor) {
      this.message = msg || massage;
      Error.captureStackTrace(this, constructor || this)
    };

    util.inherits(exports[key], Error);
  })();

}

