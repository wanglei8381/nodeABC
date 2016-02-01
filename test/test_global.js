/**
 * 全局对象
 * global
 * Buffer
 * console
 * process
 * clearInterval
 * clearTimeout
 * setInterval
 * setTimeout
 * clearImmediate
 * setImmediate
 * root
 * GLOBAL
 *
 * __dirname
 * __filename
 * exports
 * module
 * require
 * */

console.log('当前目录', __dirname);
console.log('当前文件', __filename);

for (var key in global) {
  console.log(key, typeof global[key]);
}