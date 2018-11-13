layout 
  css里面的布局是不可言语的，css里直接表达布局是不完整的
  1. 网页跟平面设计媒体一样，美观。不好看时用table来做布局，tr+td。表格是用来展示数据的，现在而言，也只用于做这项工      作，不适合做现代富媒体
  2. 后使用标签的盒子模型，比较慢，容易出问题,margin的合并,浮动问题，定位；
     成熟的float，精确的定位，现代的 display：flex  display：table
     布局 = 标签能力及表现 + css属性  
     行列的规划  layout = row + column
  3. 由2推出圣杯式布局
  4. 圣杯式 DIV+CSS 兼容性一点问题都没有的三列式布局，主列和两边侧边栏。PC时代，div标签 block => inline 但是宽度还在

  5. 圣杯式布局和双飞翼式布局经典的三栏式布局，效果基本相同。两边两栏宽度固定，中间栏宽度自适应。中间栏放最前面，为的是显示最优性能，
     放在前面的html先下载先渲染。兼容性好，主要是PC， IE8 -> chrome/Edge,
     都是margin的负值 float left 主列100% 侧边栏margin 负值
     区别： 圣杯式，position：relative + left/right -200px
     双飞翼： 给main加子元素，main 都是留出位置，但是双飞翼不需要让两侧边栏再移位置了。