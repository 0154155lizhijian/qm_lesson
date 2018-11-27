let A = {name:'a'}; //JSON Object
let B = {age:18};
let C = {hobby:'打游戏'};

A.__proto__ = B;  //天生适合于原型对象
B.__proto__ = C;  //A的原型链
console.log(A.__proto__.__proto__)
console.log(A.hobby)