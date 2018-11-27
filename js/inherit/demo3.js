function Parent(name){
    this.name = name;
    this.colors = ['red','blue','green'];
}

Parent.prototype.getName = function(){
    console.log(this.name);
}
function Child(name,age){
    Parent.call(this,name)  //  ==super()
    this.age = age
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Parent.prototype.sayhello = function(){
    console.log(`i am ${this.name}`)
}

var child1 = new Child('dawei',18);
console.log(child1) 
child1.getName()
child1.sayhello()
console.log(Child.prototype.constructor )