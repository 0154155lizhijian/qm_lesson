应用不只是页面 因此需要路由 路由接管一切 。
按url 分发组件(Page 级别的组件)
根路由App
  -> path './' 页面A级别组件(Page) -> 容器组件container
  -> 函数式组件(Present)
  -> path './about' 页面B组件(Page) -> (容器组件Container) -> 函数式组件(Present)


- Link
 a 太弱，所以react-router 给了我们link组件
 herf =>  to
 满足单页应用需要的一切
- h5 history api 更新url,页面不用刷新
- ref react 里的id DOM 利用它找到JSX的片段
    React.createRef() 返回一个不重复的id  this.searchRef.current
- context 最后一个大佬 component lifecycle state,事件  函数式组件
    this.context.router.history.push('/search/:')