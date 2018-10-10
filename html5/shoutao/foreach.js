

Array.prototype.forEach = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('参数必需为函数');
    }
    let arr = this;
    if(!Array.isArray(arr)){
        throw new Error('只能对数组使用foreach方法')
    }

    //foreach 功能
    for (let index = 0; index < arr.length; index++) {
        fn(arr[index],index,arr);
    }
  }
  const arr = new Array(1,2,3);
  arr.forEach(function(i,index) {
    console.log(`第${index}次遍历，值为${i}`);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
 

    // console.log(arguments[1] == index);
 });

