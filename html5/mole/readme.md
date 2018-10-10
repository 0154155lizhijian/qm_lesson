1. 分析布局+建立HTML结构
2. box-sizing

盒子模型
默认 width height 设置是对盒子模型里的内容的设置，然而元素在页面上的真正占的位置是整个盒子模型，内容
padding>border>margin,
元素出现在页面上，其实是一个paiting绘制的原则。

box-sizing：border-box；
占位大小 = border + padding + content = 设置的大小
width = 50% 优先 border padding 占内容，余下的才是内容

