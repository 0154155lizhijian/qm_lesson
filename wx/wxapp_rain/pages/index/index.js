import drawEffect from  '../../lib/effect'

Page({
  data:{
    width:0,
    scale:1
  },
  onLoad(){
    wx.getSystemInfo({
      success: (res) => {
        let width = res.windowWidth
        // print(width)
        let height = res.windowHeight
        this.setData({
          width,
          scale:width / 375
        });
      }
    });
    const canvasId = "effect";
    const ctx = wx.createCanvasContext(canvasId);
    //canvas 的绘制大小 下雨
    // 750的设计稿大小  画布优先 
    let {width, scale} = this.data
    let height = 768 /2 *scale
    let rain = drawEffect(ctx,width,height,{amount:200,speedFactor:0.03})
    rain.run();
    // canvas 内部有context的世界，有绘图的上下文环境
    }

})