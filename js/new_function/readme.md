new 做了什么
let p = new Person()
p 是 object类型，person函数类型 typeof
1. Parent 被执行，加了new后，Parent函数会在P的作用域下执行，this指向p  构造函数里的属性被当做P的属性被创建
2. p.__proto__指向Person.prototype p继承了Parent.prototype中的属性和方法

