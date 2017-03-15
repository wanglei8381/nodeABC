console.log(Math.trunc(4.1));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.1));
console.log(Math.trunc(-4.9));
console.log(Math.trunc(-0.1234));

console.log(Array.from('12334'));

var obj = {};
console.log(Object.assign(obj, {a: 'a'}, {b: 'b'}));
console.log(obj);

const hyphenateRE = /([^-])([A-Z])/g
function hyphenate(str) {
    return str.replace(hyphenateRE, '$1-$2')
    // .replace(hyphenateRE, '$1-$2')
        .toLowerCase()
}

console.log(hyphenate('abc'));
console.log(hyphenate('abcABC'));

