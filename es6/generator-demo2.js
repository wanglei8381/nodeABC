let co = function (run) {
    let generator = run();

    let next = function (data) {
        let res = generator.next(data);
        if (!res.done) {
            if (Array.isArray(res.value)) {

                let count = res.value.length;
                let results = [];
                res.value.forEach((hanlder, index) => {
                    hanlder((err, data) => {
                        count--;
                        if (err) {
                            throw err;
                        }
                        results[index] = data;
                        if (count === 0) {
                            next(results);
                        }
                    });
                });

            } else {
                res.value((err, data)=> {
                    if (err) {
                        throw err;
                    }
                    next(data);
                });
            }
        }
    };
    next();
}

function foo() {
    return (cb)=> {
        setTimeout(()=> {
            cb(null, 'foo');
        }, 300);
    };
}

function foo2() {
    return (cb)=> {
        setTimeout(()=> {
            cb(null, 'foo2');
        }, 100);
    };
}

function foo3() {
    return (cb)=> {
        setTimeout(()=> {
            cb(null, 'foo3');
        }, 100);
    };
}

function* run() {
    console.log('go');
    let res1 = yield [foo(), foo2()];
    console.log(res1);
    let res2 = yield foo3();
    console.log(res2);
    console.log('end');
}

co(run);

console.log(typeof run, typeof run()[Symbol.iterator]);