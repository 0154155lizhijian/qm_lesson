const fs = require('fs');     //文件系统
const path = require('path');
const dir = './src';

fs.readdir(dir,(err,files) => {
    // console.log(err);
    if(err){
        console.error(error);
        return;
    }
    files.forEach((file,index) => {
        fs.stat(path.join(dir,file),(err,stats) => {
            // console.log(stat.isFile());
            if(errored) return;
            if(err){
                errored = true;
                return cb(err)
            }
        })
    });
});