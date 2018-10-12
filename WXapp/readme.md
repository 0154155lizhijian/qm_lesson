- 小程序
 内嵌在微信超级APP,是WebView + 微信一些APP插件的混合
 WebView APP 内嵌页面技术 让APP开发使用上web技术，比Androi/IOS 更快
 缺点是性能更慢

 在拍照， tabbar ，navigationbar 等一些关键的地方又能调用原生微信里的原生组件，来提升性能

 小程序创造了 WXML  因此没有 div   view
 WXSS  主要使用弹性布局
 js MVMM


 - 架构
 小程序的架构是比较简单的
 app.js 为入口文件
 app.json 项目配置文件 pages 找到所有的页面
 1. 注册所有文件
 2. windows 设置APP名字， navigationbar 背景色 文字色
 3. tarbar 如果APP需要底栏 ，则设置一个tarbar
 pages  小程序由页面组成 
 主要的代码都在pages目录下
 1. wxml 创建结构
 2. wxss 样式
 3. js 写逻辑
 4. json 页面级别的配置文件

 - 组件
 小程序提供了很多内置功能组件
 swiper 声明式组件 html标签 功能贫瘠
 组件 集合了很多标签以及功能
 swiper>swiper-item
 indicator-dots = "{{ture}}"
 {{js区块链}}  
 
