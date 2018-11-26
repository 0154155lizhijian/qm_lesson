const Promise = require('./promise.js');

const p = new Promise((resolve,reject) => {
    setTimeout(() => {
    //     console.log('a');
        // resolve('执行了A'); 
        resolve('BBBBBB')
    }, 1000);
})
p
    .then((data) => {
        // console.log('A')
        console.log(data)
    },err => {
        console.error(err);
    })
// console.log('B')

