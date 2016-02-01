/**
 * 路由规则：
 * 必须以'/'开头
 * 可以以'/','/*','/**'结尾
 *
 *
 *
 *
 * */


var layers = [
  {
    "mapping": "/app",
    "exclude-mapping": "/app/main/**",
    "target": "/interceptor/mainInterceptor"
  },
  {
    "mapping": ["/app", "/app2"],
    "exclude-mapping": ["/app/a", "/app2/b"],
    "target": "/interceptor/mainInterceptor"
  }
]


var handleMapping = function () {
  var urls = ['/', '/m', '/m/', '/m/*', '/m/**', '/m/a', '/m/a/', 'm/a'];

  urls.forEach(function (url) {
    url = url[0] === '/' ? url : '/' + url;
    var length = url.length;
    var tail = '';
    if (url[length - 1] === '/') {
      tail = '/';
    } else if (length >= 2 && url.substr(length - 2) === '/*') {
      tail = '/*';
    } else if (length >= 3 && url.substr(length - 3) === '/**') {
      tail = '/**';
    }
    console.log(url, tail);
  });
}

function pathtoRegexp(path) {
  path = path[0] === '/' ? path : '/' + path;
  path = '^' + path;
  var index = path.indexOf('/**');
  if (index > -1) {
    path = path.substr(0, index) || '/' + '$';
  }

  index = path.indexOf('/*');
  if (index > -1) {
    path = path.replace(/\/\*/g,'/?\\w*');
    type = 2;
  }

  path = path.replace(/([\/\.])/g, '\\$1');

  console.log(path);
  return new RegExp(path);
}

var reg = pathtoRegexp('/s/m');
reg = pathtoRegexp('/s/m/*/*');

console.log(reg.test('/s/m/a/bx/'));