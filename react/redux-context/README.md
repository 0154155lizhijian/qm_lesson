redux 解决父子组件，兄弟组件间传值很麻烦的问题
react的API  context 组件传值 react-redux 基于它实现
全局状态 
打破层次关系，实现共享
除了redux 还可以使用context

- context API  redux 依靠它
childContextTypes = {
    store:PropTypes.object
}
getChildContext(){
    return {store:{}}
}

context 四步
- childContextTypes 在顶层组件规定数据类型
- getChildContext 顶层组件中设置数据
- contextTypes  后代组件规定数据类型
- 在后代组件 this.context 即可得到所有 getChildContext里面的数据state

context可以实现组件数据传递，但是太烦了，api代码的重复，dry dont repeat your self
生命周期 _upState() contextTypes
connect 来自react-redux 作为一个HOC 可以解决重复的问题
 
- connect 封装 ，有关的context的操作都交给他
- 后代组件,只需要做自己的事情
