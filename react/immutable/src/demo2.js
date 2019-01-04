let arr  = ['old',1,true,null,undefined];
//1.  var new_arr = arr.concat();
//2.  var new_arr = arr.slice();

new_arr[0] = 'new'
console.log(arr,new_arr)
// 未来不可知 new_arr arr 一方修改，不要用
// js bad parts
// Imuutable 可以让未来可知
// reducer 纯函数