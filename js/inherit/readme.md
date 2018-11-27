- 为什么要new一个函数?
    当new一个函数以后 this指向当前函数，而不是全局空间window，因此在当前分配空间this属性
1. js本没有类，除了基本数据类型外，只有对象。将对象的prototype链指向要继承的对象
2. prototype是函数的属性

3. call方法可以获得父类的所有属性
    function Person(name){
        this.names = ['kevin','daisy'];
    }

    function Child(){
        Person.call(this);
    }
    var child1 = new Child();
4. 继承三步
    - 父类的构造函数执行一下， 相当于super()
    - prototype属性指向 父类的实例。
    - 将prototype.constructor 指向构造函数

- 类Parent 三部分 prototype是方法上的属性
1. 构造函数 new Fn() {} <= this
2. 构造函数 prototype 属性 方法
对象延着原型链去查找方法
3. 构造函数和原型链是有联系的
    Parent.prototype.constructor

- 通过typeof发现复杂类型只有function和object 是语法原生支持的，其他的都只是变种
       Function                     object
      也是一等对象
    js才是真正的面向对象
      函数可以被执行
   可以当做object的构造函数。
- prototype 属性只属于函数
    __proto__ 函数或方法都有的私有属性
    一个对象A的 __proto__ 属性指向的那个对象B，
    B就是A的原型对象(父对象)，A拿到B里所有的属性和方法，也可以拿到B的原型对象C上的属性和方法，以此递归，即原型链