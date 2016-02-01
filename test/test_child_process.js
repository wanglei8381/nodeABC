var child_process = require('child_process');
//参考：http://blog.fens.me/nodejs-child-process/


/**
 * node不适合计算CPU密集计算
 * 通过child_process模块创建新的子进程，从而实现多核并行执行
 * api:
 * spawn, exec, execFile, fork
 * exec, execFile, fork是spawn的封装
 */