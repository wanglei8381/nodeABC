// 数组深浅拷贝
// 对ES6新类型不支持
// 存在环引用

const stack = []

function copy (obj, deep) {
  if (!isObject(obj)) return obj

  for (let i = 0, len = stack.length; i < len; i++) {
    if (stack[i].key === obj) {
      return stack[i].value
    }
  }

  let nobj = null
  let res = null
  if (isLikeArray(obj)) {
    res = []
    stack.push({key: obj, value: res})
    nobj = copyArray(obj, res, deep)
  } else {
    res = {}
    stack.push({key: obj, value: res})
    nobj = copyObject(obj, res, deep)
  }
  return nobj
}

function copyObject (obj, res, deep) {
  let keys = Object.keys(obj)
  let key
  for (let i = 0, len = keys.length; i < len; i++) {
    key = keys[i]
    if (deep && isObject(obj[key])) {
      res[key] = copy(obj[key], deep)
    } else {
      res[key] = obj[key]
    }
  }
  return res
}

function copyArray (arr, res, deep) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (deep && isObject(arr[i])) {
      res[i] = copy(arr[i], deep)
    } else {
      res[i] = arr[i]
    }
  }
  return res
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isLikeArray (obj) {
  return isObject(obj) && typeof obj.length == 'number'
}

// Objec.create(obj);obj修改会影响
// JSON.parse(JSON.stringify(obj)) 函数丢失,prototype指向Object

// var arr = new Int16Array(5),
//     obj = {a: arr},
//     obj2;
// arr[0] = 5;
// arr[1] = 6;
//
// obj2 = copy(obj)
// obj2.a[0] = 100;
let _ = require('lodash')
let arr = [1, 2, {oo: null}]
let arr2 = new Int16Array(5)
arr2[0] = 5
arr2[1] = 6

let oo = {
  n: 'oo',
  arr: arr,
  arr2: arr2
}
arr[2].oo = oo
let obj = {arr: arr}
let obj3 = copy(obj, true)

// let obj3 = _.cloneDeep(obj)

oo.n = 'xx'

arr2[0] = 7

console.log(obj3.arr[2].oo.arr2 === arr2)
console.log(obj3.arr[2].oo === obj.arr[2].oo)
