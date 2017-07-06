let obj = {
  [Symbol.iterator](){
    console.log('---go---');
    let i = 0;
    return {
      next(){
        i++;
        return {
          value: i,
          done: i === 5
        }
      }
    }
  }
}

for (let i of obj) {
  console.log(i);
}

var myIterable = {};

myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable] // [1, 2, 3]

// 或者采用下面的简洁写法

obj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};

for (let x of obj) {
  console.log(x);
}

// 数组原生支持
console.log([1][Symbol.iterator]().next())
console.log('abc'[Symbol.iterator]().next())