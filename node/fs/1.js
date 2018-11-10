const fs = require('fs');
// try {
//     const dataA = fs.readFileSync('./a.txt','utf8',function(err,data){
//     });
//     const dataB = fs.readFileSync('./b.txt','utf8',function(err,data){
//     });
//     const dataC = fs.readFileSync('./C.txt','utf8',function(err,data){
//     });
//     console.log(dataA,dataB,dataC)
// } catch (err) {
//     console.error('文件读取错误:'+err.message);
// }

try {
    const fileAPromise = new Promise((resolve,reject)=>{
       fs.readFile('./a.txt','utf8',function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    });
    const fileBPromise = new Promise((resolve,reject)=>{
        fs.readFile('./b.txt','utf8',function(err,data){
             if(err){
                 reject(err)
             }else{
                 resolve(data)
             }
         })
     });
     const fileCPromise = new Promise((resolve,reject)=>{
        fs.readFile('./c.txt','utf8',function(err,data){
             if(err){
                 reject(err)
             }else{
                 resolve(data)
             }
         })
     });
     Promise.all([fileAPromise,fileBPromise,fileCPromise]).then(function(data){
        console.log(data)
     })
    
    // fileAPromise 
    //     .then(data => {
    //         console.log('A'+data);
    //         return fileBPromise;    
    //     })
    //     .then(data => {  
    //         console.log('B'+data)
    //         return fileCPromise;
    //     })
    //     .then(data=>{
    //         console.log('c'+data);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })


   
} catch (error) {
    console.error('文件读取错误:'+err.message);
}