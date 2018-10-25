1. 工作流
    gulp
        task
        .src
        .pipe
        .dest()

    npm 是node包管理器
        npm init -y 初始化后得到一个package.json文件
        工作流  node启动工作流程，方便前端开发，
        gulp(工作流) 核心功能  核心是task理念    gulp.task   .src 是他的API 找到某个文件，送去工作车间，
        .pipe   .dest() 
        npm本身是node包管理器，利用它初始化项目，npm install 下载到本地使用  除webpack外，轻巧的项目流程管理工具

        npm config set 设置
        npm config set init.author.email "741953737@qq.com"
        npm config set init.author.name "wyh741953737"
        npm config set init.author.url "git@github.com:wyh741953737/qm_lesson.git"
        npm config set init.license "MIT"
        npm config set init.version "0.1.0"
        npm init -y

        npm install eslint --save-dev    //检验代码风格工具
        ./node_modules/.bin/eslint --init
        
