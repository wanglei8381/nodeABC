let co = function (run) {
    let generator = run();

    let next = function (data) {
        let res = generator.next(data);
        if (!res.done) {
            res.value((err, data)=> {
                if (err) {
                    throw err;
                }
                next(data);
            });
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

function* run() {
    console.log('go');
    let res1 = yield foo();
    console.log(res1);
    let res2 = yield foo2();
    console.log(res2);
    console.log('end');
}

co(run);