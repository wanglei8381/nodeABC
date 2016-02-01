var pathToRegExp = require('path-to-regexp');
var assert = require('assert');

var params = [];
var m = pathToRegExp('/', params).exec('/test/app');
//var m = pathToRegExp('/:test', params).exec('/test');

console.log(params);

console.log(m);