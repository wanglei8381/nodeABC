var pathToRegexp = require('path-to-regexp');

var keys = [];
var reg = pathToRegexp('/user/:id?', keys, {strict: false, end: true, sensitive: true});

console.log(reg.exec('/user/:123/').lengtgh);

