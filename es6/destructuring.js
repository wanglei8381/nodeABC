/*
 let [a, b, c] = [1, 2, 3];
 console.log(a, b, c);

 let [d,[e],[[f]]] = [4,[5],[[6]]];
 console.log(d, e, f);

 //foo没有定义
 let { foo: bar } = { foo: "aaa", bar: "bbb" };

 console.log(bar);
 */
/*
 let x = 1;
 let y = 2;

 [x, y] = [y, x];

 console.log(x, y);*/


/*
 var jsonData = {
 id: 42,
 status: "OK",
 data: [867, 5309]
 };

 let { id, status, data: number } = jsonData;

 console.log(id, status, number);*/


// var {a, b, c, d='ss'} = {a: 'a1', b: 'b2', c: 'c3', d: 'd4'};

// console.log(a, b, c, d);


//
//({ p: a }) = { p: 42 };


var x = 1;
function foo(y = function () {
    x = 2;
}, x) {
    x = 3;
    y();
    console.log(x);
}

foo()

console.log(...[1, 2, 3])

let o = {
    data: function () {
        return {}
    },
    data(){
        return {}
    }
}