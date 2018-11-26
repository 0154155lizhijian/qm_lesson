- 手写Promise A+ 规范
js回调 解决异步 出现了倒金字塔式的回调地狱

一个类，构造函数，resolve？ reject？
返回的就是promise实例 then方法

1. Promise 将executor封装在构造函数内部，并且提供resolve ，reject 两个函数给executor到那个时候再回调
2. then 是同步的，跟promise构造函数一样，属于语法的一方面，将onResolveFullfulled onRejected 存储起来，并和this绑定
3. executor 高阶函数 才是真正的主战场， 负责this.status this.reason this.value 的处理

