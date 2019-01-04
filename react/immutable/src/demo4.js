var arr = [function(){
    console.log(a)
},{
    b:function(){
        console.log(b);
    }
}]
var new_arr = {}
var new_arr = arr

new_arr.b=function(){
    console.log(c)
}

console.log(arr)
console.log(new_arr)