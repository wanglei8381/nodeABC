'use strict'

let map = new Map();

map.set('name', 'nihao');
console.log(map.get('name'));


let o = {name: 'o'};
map.set(o, 'lisi')
console.log(map.has(o));


map = new Map([["name", "张三"], ["title", "Author"]]);

map.size // 2
map.has("name") // true
map.get("name") // "张三"
map.has("title") // true
map.get("title") // "Author"

console.log('\n-----------------------------------\n');

var items = [
    ["name", "张三"],
    ["title", "Author"]
];
map = new Map();

items.forEach(params => map.set(params[0], params[1]));

console.log(map);

//items.forEach(([key, value]) => map.set(key, value));