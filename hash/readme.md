#hashtag 在当前页面切换 本页面不会刷新
单页应用 
hashChange 会带来一个事件，组件的动态加载
#hashtag => url的一部分

- 传统地址切换有以下问题
  1. 重度依赖于 http协议
  当只有后端路由时， 重新生成整个的html网页 新的页面会有新的dom渲染的过程，会有一个时间的白屏，比较慢，影响体验
  - 新时代的路由
  history api，或有hashtag
  不会产生页面的跳转，捕捉到事件，马上切出对应的组件
  - 网页地址 #/querystring  这样的形式则会产生hashchange事件

  - history API 
  window.history.pushState()
  url访问,都是浏览器中的一个访问记录，
  就是数据结构里面的栈，
  pushState(null,null,'#/hello') 入栈一个浏览历史
  pop 给我们的访问新增一个记录，但是不会刷新页面，同时会得到一个popstate 事件，页面组件的切换
  前端的路由已经成熟，既可以hash也可以path 切换，全部交给pushState
