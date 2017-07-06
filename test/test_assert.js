var assert = require('assert')

try {
  assert(false, 'assert:false')
} catch (e) {
  console.log(e.message)
}

try {
  // deepEqual使用==等号比较
  // 对于引用类型，只会枚举自己的属性，prototype的不会比较
  assert.deepEqual({ a: 'a' }, { a: 'a' }, 'assert:deepEqual') // 通过
  assert.deepEqual({ a: 1 }, { a: '1' }, 'assert:deepEqual') // 通过
  assert.deepEqual({ a: 1 }, { a: 2 }, 'assert:deepEqual') // 不通过
  assert.deepEqual({ a: 1 }, { b: undefined }, 'assert:deepEqual') // 不通过
} catch (e) {
  console.log(e.message)
}

try {
  // deepEqual使用===等号比较
  // 对于引用类型，不仅枚举自己的属性，prototype的也会比较
  assert.deepStrictEqual({ a: 1 }, { a: '1' }, 'assert:deepStrictEqual') // 不通过
} catch (e) {
  console.log(e.message)
}

try {
  assert.doesNotThrow(
    () => {
      throw new TypeError('assert:doesNotThrow:TypeError');
    },
    TypeError
  );
  assert.doesNotThrow(
    () => {
      throw new TypeError('assert:doesNotThrow:SyntaxError');
    },
    SyntaxError
  );
} catch (e) {
  console.log(e.message)
}
