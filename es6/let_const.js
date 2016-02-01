'use strict';

/**
 *
 * 严格模式下
 *  函数只能在顶层作用域和函数内声明，其它如if{}，for{},while{},块{}，都不允许
 *
 * let：
 *  1.声明的变量只在它的代码块中有效
 *  2.不存在变量提升
 *  3.暂时性死区
 *  ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 *  typeof的使用不再安全
 *  4.不允许重复声明
 *    let不允许在相同作用域内，重复声明同一个变量
 *
 * const:
 *  1.同let的规则
 *  2.声明的是常量。一旦声明，常量的值就不能改变。
 *  3.只有一种用法，如： const PI = 3.14
 *  4.严格模式下重新赋值报错，常规模式下不报错，但无效
 *  5.对于引用类型，储存的是一个地址
 *
 *
 */



var log = function () {
  console.log.apply(console, arguments);
};

//示例1：
{
  let a = 0;
  var b = 0;
  log(a);
}

try {
  b = 1;
  a = 1;
} catch (e) {
  log('a在代码块外访问：', e);
  log('b在代码块外访问：', b);
}

//示例2：
try {
  console.log(c);
  let c = 0;
} catch (e) {
  log('c在变量声明前使用：', e);
}

//示例3：
var d = 0;
try {
  log(d, typeof d);
  let d = 1;
} catch (e) {
  log('d暂时性死区：', e);
}

//示例4：
/*
 try {
 var e = 1;
 let e = 1;
 } catch (e) {
 log('声明同一个变量：', e);
 }

 try {
 let e = 1;
 let e = 1;
 } catch (e) {
 log('声明同一个变量：', e);
 }*/


//示例5：
const cos = require('./const');
log(cos.A);
cos.A = 2;
log(cos.A);