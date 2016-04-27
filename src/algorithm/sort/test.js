'use strict';

let insertSort = require('./insertSort').sort;
let selectSort = require('./selectSort').sort;

let arr = [], index = 0;
while (index < 200) {
    arr[index] = Math.floor(Math.random() * 100000);
    index++;
}

console.time('insert');
insertSort(arr);
console.timeEnd('insert');

//console.time('select');
//selectSort(arr);
//console.timeEnd('select');

//console.time('sys');
//arr.sort(function (a, b) {
//    return a - b
//});
//console.timeEnd('sys');
