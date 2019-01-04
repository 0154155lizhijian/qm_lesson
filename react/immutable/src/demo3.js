var arr = [{old:'old'},['old']]
// var new_arr = arr.slice()  此时slice()方法 浅拷贝不生效
// 深拷贝
var new_arr = JSON.parse(JSON.stringify(arr));  
//使其字符串化 ，new_arr和arr完全不一样.JSON 两个方法，对非函数子元素，可进行深拷贝，性能开销比浅拷贝要大
new_arr[0].old = 'new';
new_arr[1][0] = 'new';

//深浅自知，深拷贝有他的应用场景，更加高效
console.log(arr,new_arr)
