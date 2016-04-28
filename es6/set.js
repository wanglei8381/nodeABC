'use strict'

/**
 * Set数据结构
 *  Set不允许元素重复。HashSet和TreeSet是两个主要的实现类，js不确定是那种实现
 *
 * 'constructor',
 * 'size',
 * 'add',
 * 'has',
 * 'delete',
 * 'clear',
 * 'forEach',
 * 'entries',
 * 'keys',
 * 'values'
 *
 */


let set = new Set();

set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add({n: 1});

console.log(set);
console.log(set.size);
console.log(set.has('s'), set.has(2));
console.log(set.delete(2), set);
console.log('----------------------------');
set.forEach((val, key, arr) => {
    console.log(key, val, arr);
});
console.log('----------------------------');
console.log(set.entries());
console.log(set.keys());
console.log(set.values());

console.log('----------------------------');
console.log(set.clear(), set);