let p = new Promise((resolve, reject) => {
    console.log('--->');
    reject('reject');
});

p.then((value)=> {
    console.log(value);
}).catch(()=>{
	console.log('catch')
}).then(() => {
	console.log('next')
})