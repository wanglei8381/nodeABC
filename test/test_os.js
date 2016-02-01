var os = require('os');

/**
 *
 * 计算机单位换算
 * 1Byte = 8bit
 * 1KB = 1024Byte
 * 1MB = 1024KB
 * 1GB = 1024MB
 * 1TB = 1024GB
 *
 */

//cpus的信息
console.log('cpu', os.cpus());
//查看操作系统平台
console.log('操作系统平台', os.platform());
//查看操作系统版本
console.log('操作系统版本', os.release());
//查看操作系统名称
console.log('操作系统名称', os.type());
//查看操作系统CPU架构
console.log('操作系统CPU架构', os.arch());
console.log('临时目录', os.tmpdir());
console.log('临时目录', os.tmpDir());
console.log('空闲内存', os.freemem() + 'Byte', os.freemem() / 1024 / 1024 / 1024 + 'GB');
console.log('总共内存', os.totalmem() + 'Byte', os.totalmem() / 1024 / 1024 / 1024 + 'GB');
console.log('CPU 的字节序，可能的是 "BE" 或 "LE"', os.endianness());
console.log('操作系统的主机名', os.hostname());
console.log('包含 1、5、15 分钟平均负载的数组', os.loadavg());
console.log('操作系统运行的时间（秒）', os.uptime());
console.log('获取网络接口的一个列表信息', os.networkInterfaces());
//console.log('同networkInterfaces，不被鼓励使用', os.getNetworkInterfaces());
console.log('操作系统的一行结束的标识的常量', os.EOL === '\r\n', os.EOL === '\n', os.EOL === '\r');

