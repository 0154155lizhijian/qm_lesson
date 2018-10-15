// 'use strict';
// var arr = ['小明', '小红', '大军', '阿黄'];

// var arr1 = arr.sort()
// var arr2 = arr1.slice(0,-1)
// var arr3 = arr1.slice(-1)
// console.log(arr2)
// console.log(arr1)

// console.log(`欢迎${arr2}同学和${arr3}同学`)

// 'use strict';

// var height = prompt('请输入身高(m):','1.7');
// var weight = prompt('请输入体重(kg):','60');

// var bmi = weight/(height*height);
// if (bmi<18.5){
//  console.log("过轻")
// }else if(18.5<bmi<25){
//  console.log('正常')
// }else if(25<bmi<28){
//  console.log('guozhong')
// }else if(28<bmi<32){
//  console.log('feipan')
// }else{
//  console.log('yanzhongfeipan')
// }

// var x = 1;
// var i;
// for (i=1;i<11;i++){
//     x=i*x
// }
// console.log(x)

// var x = 0;
// for (;;) { // 将无限循环下去
//     if (x > 100 ){
//         console.log(1)
//         break; // 通过if判断来退出循环
//     }
//     x ++;
// }


'use strict';
// var arr = ['Bart', 'Lisa', 'Adam'];
// for (var i in arr){
//     console.log('hello,'+arr.join('-')+','+arr[i])
// }

// var a = ['A', 'B', 'C'];
// a.name = 'Hello';
// console.log(a)
// for (var x in a) {
//     console.log(a[x]); // '0', '1', '2', 'name'
// }

// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// m.forEach(function (value, key, map) {
//     console.log(key);
// });
var b =[]
var arr = [1,2,3]
b= arr
console.log(b==arr)

// function foo(a, b, c) {
//     if (arguments.length === 2) {              //arguments.length === 2  实际使用的参数
//         // 实际拿到的参数是a和b，c为undefined
//         c = b; // 把b赋给c
//         b = null; // b变为默认值
//     }
// }

function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []