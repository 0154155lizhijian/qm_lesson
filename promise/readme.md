- 多个promise对象 只能用一条 .then()链，来解决异步问题，让代码同步执行
    new Promise()   对象 可以传参 resolve reject
    =>  new Promise((resolve,reject) => {
        异步执行的代码， resolve reject
        resolve(123)
    })
    每个Promise 对象都是可以thenable 的
    在then 的函数里
    then(res => res.json())
    res.json() 本身也是一个promise
    显示返回的一个promise对象，所以可以继续执行下去
    不如await 优秀



- ajax 的源码实现
    const xhr = new XMLHttpRequest();  
    xhr.open('get',url,true);
    xhr.send();
    if (xhr.onreadyState == 4 && xhr.status == 200){
                callback(xhr.responseText);
            }
    