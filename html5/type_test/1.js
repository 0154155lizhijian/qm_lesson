var und = undefined;   //6种简单类型
var nul = null;
var boo = true;
var num = 1;
var str = 'lzj';
//symbol  

//复杂类型  引用类型
var obj = {a: 1};//json

var func = function(){};
var arr = [1,2,3];

console.log(typeof func)

// var obj1 = {};

// for(var key in obj){
//     obj1[key] = obj[key];
// }
// // var obj1 = obj;

// // console.log(obj);

// obj1.a = 2;

// console.log(obj);
// console.log(obj1);

console.log(typeof boo);
console.log(typeof num);
console.log(typeof und);
console.log(typeof nul);
console.log(typeof obj);


var arr1 = [1, 2, 3];
var arr2 = arr1.slice(0);
arr2[0] = 0;
console.log(arr1);
console.log(arr2);  //数组的copy
