canvas  游戏及特效
小程序里canvas 大小是px  所以用到小程序里面需要用scale来控制大小 
绘图API 跟web中有区别 


ctx + 绘图API 将绘制的细节封装出去
画布 wx.createCanvasContext() 跟web不一样的地方 它的实现使用了IOS/Andioid的一套
进行封装  绘图这块，封装到utils 里面

canvas-id ="effect"
ctx,
画布的大小  解构 width scale height 
drawEffect(width,height,scale,...)

utils
    小程序里canvas特效只是一部分，将它抽象封装，有利于将复杂隐去，适合多人合作
    


