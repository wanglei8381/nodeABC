function fetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 1000);
    });
}

async function logInOrder() {
    let res1 = await fetch();
    console.log(res1);
    let res2 = await fetch();
    console.log(res2);
}

logInOrder();