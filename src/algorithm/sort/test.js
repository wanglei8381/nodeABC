'use strict';

let insertSort = require('./insertSort').sort;

let arr = [], index = 0;
while (index < 250) {
    arr[index] = Math.floor(Math.random() * 100000);
    index++;
}

console.time('insert');
insertSort(arr)
console.timeEnd('insert');

console.time('sys');
arr.sort(function (a, b) {
    return a - b
});
console.timeEnd('sys');
