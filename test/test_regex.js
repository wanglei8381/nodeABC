/**
 * 参考：http://www.runoob.com/w3cnote/regular-expression-30-minutes-tutorial.html#alternative
 *      http://segmentfault.com/a/1190000003497780#articleHeader2
 *
 * RegExp重要属性：
 * global布尔值，表示是否设置了 g 标志
 * ignoreCase: 布尔值，表示是否设置了 i 标志
 * lastIndex: 搜索下一个匹配项时开始的位置，从0开始
 * multiline: 布尔值，表示是否设置了 m 标志
 * source: 正则表达式的字符串表示
 *
 * 常用方法：
 * test
 * exec
 *
 * 字符串函数
 * replace
 */


var showBaseAttr = function () {
  var reg = /\d/g;
  console.log('g', reg.global);
  console.log('i', reg.ignoreCase);
  console.log('m', reg.multiline);
  console.log('lastIndex', reg.lastIndex);
  console.log('src', reg.source);
}

var showTestMethod = function () {
  var reg = /\d/g;
  console.log(reg.test('a123'));
}

var showExecMethod = function () {
  var reg = /(?:\d)+?/g;
  console.log(reg.exec('a123'));
  console.log(reg.exec('a123'));
  console.log(reg.exec('a123'));
  console.log(reg.exec('a123'));
}

//showBaseAttr();
//showTestMethod();
//showExecMethod();

function pathtoRegexp(path, keys, options) {
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var flags = options.sensitive ? '' : 'i';
  keys = keys || [];

  if (path instanceof RegExp) {
    return path;
  }

  if (Array.isArray(path)) {
    // Map array parts into regexps and return their source. We also pass
    // the same keys and options instance into every generation to get
    // consistent matching groups before we join the sources together.
    path = path.map(function (value) {
      return pathtoRegexp(value, keys, options).source;
    });

    return new RegExp('(?:' + path.join('|') + ')', flags);
  }

  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'));
  console.log('####step001', path);
  path = path.replace(/([\/\.])/g, '\\$1');
  console.log('####step002', path);
  path = path.replace(/\/\(/g, '/(?:')
  console.log('####step003', path);
  path = path.replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function (match, slash, format, key, capture, star, optional) {
    console.log('@@@@@@@@', match, slash, format, key, capture, star, optional);
    slash = slash || '';
    format = format || '';
    capture = capture || '([^\\/' + format + ']+?)';
    optional = optional || '';

    keys.push({name: key, optional: !!optional});

    return ''
      + (optional ? '' : slash)
      + '(?:'
      + format + (optional ? slash : '') + capture
      + (star ? '((?:[\\/' + format + '].+?)?)' : '')
      + ')'
      + optional;
  });
  console.log('####step004', path);
  path = path.replace(/\*/g, '(.*)');
  console.log('####step005', path);
  // If the path is non-ending, match until the end or a slash.
  path += (end ? '$' : (path[path.length - 1] === '/' ? '' : '(?=\\/|$)'));
  console.log('####step006', path);
  return new RegExp(path, flags);
};


var keys = [];

var reg = pathtoRegexp('/sys/a(bc)+d', keys, {end: false});

console.log(reg.exec('/sys/abcd/'), keys);
