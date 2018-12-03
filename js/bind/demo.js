var foo = {
    value:1
}
var obj = {
    value:2
}
function bar(name,age){
    console.log(this.value)
}


//新函数
var bindFoo = bar.bind(obj);
bindFoo();
console.log(typeof bindFoo)

var bindCall = bar.call(obj)

