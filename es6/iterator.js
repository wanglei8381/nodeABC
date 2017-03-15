const obj = {
    [Symbol.iterator](){
        console.log('---');
        let i = 0;
        return {
            next(){
                i++;
                return {
                    value: i,
                    done: i === 5
                }
            }
        }
    }
}

for (let i of obj) {
    console.log(i);
}