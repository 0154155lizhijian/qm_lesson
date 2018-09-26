var fs = require('fs');
var data;


try {
    data = fs.readFileSync('./fileForRead.txt','utf8');

console.log(data);
} catch (err) {
    console.error('文件读取错误:'+err.message);
}
