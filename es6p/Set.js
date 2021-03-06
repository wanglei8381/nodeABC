class Set {
  constructor (arr) {
    const _this = this
    this._cache = {}
    this.keys = this.values = distinct(arr, this._cache)

    Object.defineProperty(this, 'size', {
      enumerable: true,
      get () {
        return _this.keys.length
      }
    })
  }

  add (obj) {
    let key = resolveKey(obj)
    if (!this._cache[key]) {
      this.keys.push(obj)
      this._cache[key] = this.keys.length
    }

    return this
  }

  delete (obj) {
    let key = resolveKey(obj)
    if (this._cache[key]) {
      this.keys.splice(this._cache[key] - 1, 1)
      this._cache[key] = 0
      return true
    }

    return false
  }

  has (obj) {
    let key = resolveKey(obj)
    return !!this._cache[key]
  }

  clear () {
    this._cache = {}
    this.keys = this.values = []
  }
}

function distinct (arr, cache) {
  if (!Array.isArray(arr)) {
    return []
  }
  let tmp
  let key
  let res = []
  for (let i = 0, length = arr.length; i < length; i++) {
    tmp = arr[i]
    key = resolveKey(tmp)
    if (!cache[key]) {
      res.push(tmp)
      cache[key] = res.length
    }
  }
  return res
}

let uid = 0
function resolveKey (key) {
  if (isString(key)) {
    return 's_' + key
  }
  if (isFunction(key)) {
    return key.name ? 'f_' + key.name : 'f_' + uid++
  }

  return key
}

function isString (obj) {
  return typeof obj === 'string'
}

function isFunction (obj) {
  return typeof obj === 'function'
}

let s = new Set([
  1, 2, 2, 3,
  '2', 'true',
  '2', 'true',
  '', '',
  null, null,
  undefined, undefined,
  true, false, true,
  {a: 'a'}, {b: 'b'}])

s.add(5).delete(3)
console.log(s.has(1))
console.log(s.keys)
s.clear()