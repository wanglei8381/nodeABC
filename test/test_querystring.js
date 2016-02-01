var querystring = require('querystring');

var param = {
  foo: 'abc',
  sex: 1,
  color: ['red', 'black'],
  q: ''
};

/**
 * querystring.stringify(obj,sep,eq,options)
 *
 * obj:对象
 * sep:分隔符，默认&
 * eq:键值连接符，默认=
 * options：{
 *  encodeURIComponent：编码格式，默认querystring.escape
 *
 * }
 *
 */
console.log(querystring.stringify(param));

/**
 * querystring.parse(str,sep,eq,options)
 *
 * str:字符串
 * sep:分隔符，默认&
 * eq:键值连接符，默认=
 * options：{
 *  decodeURIComponent：编码格式，默认querystring.unescape
 *
 * }
 */
console.log(querystring.parse('foo=abc&sex=1&color=red&color=black&q=&w[a]=1&w[b]=2'))