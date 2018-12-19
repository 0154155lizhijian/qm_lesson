组件的形式 ，容器组件和函数组件，高阶组件 构建组件时 选择合适的方式
路由页面下的组件树  页面级别，形成单页应用
不同状态下，细分组件行为

1. JSX 内有些逻辑比较复杂，update body 经过了计算一样，在vue里面有一个计算属性，react 组件方法
2. moment().fromNow()
  _.truncate(content,num)  ...算三个字符，入num
3. 编辑表单toggle
    相当于三元运算符   
  {this.state.open && <Editor entity={this.state.entity} updateEntity={this.updateEntity}></Editor> }
  如果open 则有editor 否则为 !open