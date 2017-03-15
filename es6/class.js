class A extends Array {
    constructor(...args) {
        super(...args);
    }
}

let a = new A(1, 2);

console.log(a[0]);
