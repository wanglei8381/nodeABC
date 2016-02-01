/**
 * Buffer:
 * 全局变量类型
 * 处理二进制数据
 */

var buf = new Buffer(0);
console.log(buf);

buf = new Buffer(2);
console.log(buf);

console.log('##############支持的编码格式（默认utf8，其中ucs2，ucs-2，utf16le，utf-16le是同一种）##############');
console.log('hex', Buffer.isEncoding('hex'));
console.log('utf8', Buffer.isEncoding('utf8'));
console.log('utf-8', Buffer.isEncoding('utf-8'));
console.log('ascii', Buffer.isEncoding('ascii'));
console.log('binary', Buffer.isEncoding('binary'));
console.log('base6', Buffer.isEncoding('base64'));
console.log('ucs2', Buffer.isEncoding('ucs2'));
console.log('ucs-2', Buffer.isEncoding('ucs-2'));
console.log('utf16le', Buffer.isEncoding('utf16le'));
console.log('utf-16le', Buffer.isEncoding('utf-16le'));
console.log('############## END ##############');


console.log('判断是否是Buffer',Buffer.isBuffer('123'));
console.log('判断是否是Buffer',Buffer.isBuffer(buf));


console.log('##############字符串的字节长度，由于字符串编码不同，所以字符串长度和字节长度有时是不一样的##############');
console.log('1234');
console.log('字符串的字节长度',Buffer.byteLength('1234','utf8'));
console.log('字符串的字节长度',Buffer.byteLength('1234','ascii'));
console.log('字符串的字节长度',Buffer.byteLength('1234','base64'));
console.log('字符串的字节长度',Buffer.byteLength('1234','hex'));
console.log('abcd');
console.log('字符串的字节长度',Buffer.byteLength('abcd','utf8'));
console.log('字符串的字节长度',Buffer.byteLength('abcd','ascii'));
console.log('字符串的字节长度',Buffer.byteLength('abcd','base64'));
console.log('字符串的字节长度',Buffer.byteLength('abcd','hex'));
console.log('中国万岁');
console.log('字符串的字节长度',Buffer.byteLength('中国万岁','utf8'));
console.log('字符串的字节长度',Buffer.byteLength('中国万岁','ascii'));
console.log('字符串的字节长度',Buffer.byteLength('中国万岁','base64'));
console.log('字符串的字节长度',Buffer.byteLength('中国万岁','hex'));
console.log('############## END ##############');
