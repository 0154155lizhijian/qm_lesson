1. this由函数的调用方式来决定 
    普通函数 对象的方法 事件处理函数 闭包
2. this 作用域 自行手动指定
- call apply 区别在于参数 call ,序列   apple ,数组
- bind 可以实现延后执行 返回一个新函数 ，并且内部的this指定为第一个函数

3. 手写一个bind
Function.prototype.bind 

4. bind 是展示this闭包 函数式编程 原型链最直接的例子
this:
  - apply
  bind 是基于apply手动指定this为绑定对象的
  - 闭包区域
  this 由调用方式决定为被绑定的函数就是this self=this 在闭合空间一直存在
  2. 闭包
  函数嵌套函数  闭包中的变量一直可以被访问
  3. 函数式编程
    bind 返回一个新函数，解决了事件函数的this丢失 一般事件的listen
    this 指向的事件对象target 在react 组件式开发或者是面向对象有需求，将事件的处理函数作为组建类的方法，即延迟调用，
    同时又手动指定this
    apply + 函数式
    return function(){
        self.apply(context)
    }
5. 原型链
Function.prototype.bind    是原型链上的方法，它丰富了function的能力，所有function可以调用原型链上的方法


