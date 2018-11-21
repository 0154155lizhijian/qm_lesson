1. babel class 编译
    .babelrc 不可少, presets数组 env
    - js 面向对象是原型式的 还是es5处置方案
    function Person(){} 构造函数
    Person.prototype = {}
    es6 class constructor 只是语法糖而已
    - es5的构造函数可以作为普通函数来执行，
    class es6 babel 编译时杜绝没有new 直接运行
    在 es5中要做类型判断
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Person = function Person(name) {
        _classCallCheck(this, Person);
        this.name = name; //改变了this的指向
        console.log(name);
    };

    - es6的prototype 属性不可枚举enumerable
    object.keys() 就是枚举
    object.getOwnPropertyNames(Person.prototype)