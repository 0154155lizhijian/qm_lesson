// new?  实例化的过程 
// Otaku类 抽象概念 等待被new 只是一个function 没有实例
function Otaku(name,age){
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strenth = 60;
// new  
// 1.返回一个实例{}，拥有otaku 函数中加的那些属性
// 2.实例可以访问到otaku.prototype中的属性
// new ? js 关键字
//函数也是对象
// 执行new 马上产生一个new object
function objectFactor(fn, ...args){
    var obj = new Object();
    Constructor = [].shift.call(arguments);
    // console.log(arguments);
    //1. 返回一个新的空对象
    //2. this 要指向新的对象
    //3. 让Constructor执行
    console.log(Constructor.prototype)
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
    return obj;
}
// var obj = new Otaku()
// 1.构造函数 2.其余是构造函数需要的参数
const didi = objectFactor(Otaku,'kevin','18');
console.log(didi.strenth)