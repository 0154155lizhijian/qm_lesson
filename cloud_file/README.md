- 文件上传
    云服务器 买服务器， ip(cdn 绑定域名)， 硬盘空间， cpu计算 数据存储(mongodb) node(npm v8.0+,koa )的运行环境以及操作系统(linux centos)
    云服务 全部sdk化 数据存储wx.cloud.database
    文件存储 wx.cloud.uploadFile
        文件流  出口(Path)， 入口(Path)  在硬盘里
        wx.cloud.uploadFile({
            coludPath: 打开文件可写流
            filePath:  打开文件可读流
            
        })

    云函数   wx.cloud.callFunction
    wx.cloud.websdk