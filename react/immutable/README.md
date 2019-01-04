react(ui)+redux(data flow)+immutable(不可变数据)

reducer 
  switch
    case
      default
        return
只有一部分更新了，丢掉了没有更新的大部分

- 深拷贝 浅拷贝
都为拷贝，规避js 复杂对象类型引用式复制
引用式赋值会让代码未来变的不可预测，不再单纯，可能出现二义性
1. 结合react reducer 纯函数，引入Immutable来确保状态对象赋值后是全新的对象，不会影响原来的对象
2. 浅拷贝
    slice() concat()  无法解决非数组的对象，如果是数组，则此处最优
    最原始的for(key in )重新赋值 没有解决不了的对象拷贝
3. 嵌套对象时，如果内部没有函数的话，可以使用深拷贝 JSON.parse(JSON.stringify())
4. 做通用方法时，可以运用递归思想，将一个拷贝分为n个浅拷贝的方式，当元素不为对象时退出  性能开销比较大

各有优势，看情况使用。
typeof obj !== 'object' return ;
var newObj = obj instanceof Array?[]:{}
for(key in obj){
    if(obj.hasOwnProperty(key)){
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]:obj[key])    //***关键***
    }
}
return newObj;
