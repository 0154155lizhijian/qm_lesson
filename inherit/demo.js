function Parent(){
    this.name = 'kevin';
}
// 原型链对象{}prototype?任何函数都可以有的属性
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(){}
Child.prototype = new Parent();
var child1 = new Child();
child1.getName();
// prototype 原型式继承
// Parent 函数 this指针 -> new  js 本没有类， 只有对象 object
// Parent.prototype