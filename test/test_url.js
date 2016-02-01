var url = require('url');

var path = 'http://user:pass@host.com:8080/p/a/t/h?query=string&query2=string2#hash';

var log = function () {
  console.log.apply(this, arguments);
}
//解析url
log(url.parse(path));
//解析url，将query也解析成对象
log(url.parse(path, true));
//解析url，解析时会将url的"//"和第一个"/"之间的部分解析为主机名
log(url.parse(path, false, true));

path = url.format({
  protocol: 'http:',
  hostname: 'www.baidu.com',
  port: '80',
  pathname: '/news',
  query: {page: 1}
});

log(path);

url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'


log(url.parse('/p/a/t/h?query=string&query2=string2#hash',true));