Function.prototype.bind2 = function(context){
    // console.log(context)
    var args = Array.prototype.slice.call(arguments,1)
    // console.log(this)
    let self = this

    return function(){                                              //return 的是function obj
        var bindArgs = Array.prototype.slice.call(arguments);               
        self.apply(context,args.concat(bindArgs));
    }
    // return ()=>{
    //     //this
    //     this.apply(context)
    // }
}
const obj = {
    value:1
}
const foo = function(name,age){
    console.log(name);
    console.log(age);
    console.log(this.value);
}
const fooObj = foo.bind2(obj,'daisy')
fooObj(18)