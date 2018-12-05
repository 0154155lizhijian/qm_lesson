var fileFinder = require('./demo1.js');
fileFinder('./src',function(err,filename){    
    if(err){
        return console.error(err)
    }    
    console.log(filename)                         
});                               
                                  
//1.传入一个callback  它是一个函数
//2.then方法处理
//3.async await方案