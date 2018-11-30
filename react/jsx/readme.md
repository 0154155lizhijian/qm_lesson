JSX React 模板的语法
Component render()
函数式 return()

在js里 template 跟 vue 不一样 ， 在js里 所以叫JSX 工作交给babel去做

1. JSX是一切组件的基础，函数式组件，以返回JSX为目标
2. JSX可以执行JS的所有操作
3. React JSX React.createElement() 更优雅的表达可读性
jsx是用来描述UI信息的，React.createElement()更能表达这点

不管是小程序 vue react 都是MVVM
模板 数据绑定的{} {{}}
JSX 不支持wx:for 还好它的纯JS，可以自己写逻辑，灵活度更高