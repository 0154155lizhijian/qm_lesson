// node // commonJs  ES6JS 模块化方案
const path = require('path')
module.exports = {
    entry:'./src/main.js',   //入口
    output:{
        // 打包
        filename:'bundle.js',
        path:path.resolve(__dirname,'.')
    },
    module:{
        rules:[{
            test:/\.js/,
            use:{
                loader:'babel-loader'
            },
            exclude:'/node_modules/'
        }]
    },
    resolve:{
        extensions:['.js']
    },
    devServer:{
        contentBase:'.',
        
    }
  
}