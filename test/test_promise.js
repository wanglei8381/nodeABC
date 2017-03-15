'use strict';

//基本用法
var p = new Promise((reslove, reject) => {
    console.log('--->inner');
    setTimeout(()=> {
        // reslove('==aa');
        reject('==bb');
    }, 0);
});

p.then((val)=> {
    console.log('reslove1', val);
    return 'from reslove1';
}, (val)=> {
    console.log('reject1', val);
    // throw new Error('test');
    return 'from reject1';
}).then((val)=> {
    console.log('reslove2', val);
}).catch((err)=> {
    console.log('catch', err);
});

//all
// Promise.all([1, false, [1, 3], 'str'])
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//
// Promise.all([(reslove, reject)=> {
//     reslove(1)
// },(reslove, reject)=> {
//     setTimeout(()=>{
//         reslove(false)
//     },1000);
// },  [1, 3], 'str'])
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
