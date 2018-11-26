function Parent(name){
    this.names = ['kevin','daisy'];
}

function Child(){
    Parent.call(this);
}
var child1 = new Child();
child1.names.push('yuya')
console.log(child1.names)
console.log(Parent.prototype)