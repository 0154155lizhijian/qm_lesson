为了封装性，易用性，以及代码的可读性，
将弹幕的业务逻辑(独立) 封装成一个类， 并将其模块化
直接在浏览器端引入（执行）export defaultl;
import 模块化关键字，浏览器目前还没支持，
async 最近版本才支持， syntax
如何用未来的编码风格来写，而且编译可以通过
写的代码，compile babel 最后执行的代码不一样，
交给webpack 
    test .js文件
        babel-loader  es5
webpack-dev-server http server 在这之前，它会先compile webpack 
    entry(入口，引入更深层次的文件)                                      
    output (出口)

- canvas 业务逻辑模式
  render() 负责一直绘制   以递归的方式 requestAnimationFrame(this.render.bind(this)) 确保在对象上递归
  renderBarrage() 负责绘制内容 
  clearRect(0,0,w,h)  删除上一次的绘制，重新绘制

- barrage 集合对象,
  选择需要画的 video.currentTime >= time 做完操作回收， item.flat = true
  render() 

  对象的思想 
    面向对象 对象的职责和分工
    容器对象， canvas video  render() 负责递归 一直绘制 constructor生成barrage的集合
    业务细节对象 根据 data item属性的render() 绘制出文字constructor