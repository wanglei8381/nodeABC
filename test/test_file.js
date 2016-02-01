var fs = require('fs');
var path = require('path');

//文件或目录是否存在
function exists(path){
  return fs.existsSync(path) || path.existsSync(path);
}

//是否是文件
function isFile(path){
  return exists(path) && fs.statSync(path).isFile();
}

//是否是目录
function isDir(path){
  return exists(path) && fs.statSync(path).isDirectory();
}