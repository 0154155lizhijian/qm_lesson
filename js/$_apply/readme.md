- 性能优化
script 标签 阻塞性， src 下载代码，或者行内的js并执行   因此不要放头部
页面的显示，就是  painting  绘制 排列 重绘重排

生命周期
window.onload
doucument.
DOMContentLoaded

js 开始  不要阻止dom的绘制 但是也不要等到window onload 执行
DOMContentLoaded dom ready img 

- $(callback)
jquery $第一种使用用途是dom ready 事件
$(function(){
    //js here 
})
$(selector) 用于选择元素
动态页面   数据是动态的 因为交互和生命周期对数据进行分析处理 做到千人千面
以$ 这种形式可以不用等数据取出来， 先显示页面，再去除数据，运行更快。

