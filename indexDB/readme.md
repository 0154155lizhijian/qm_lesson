- 数据保存
    1. localStorage 小的，结构简单的数据 
    复杂 结合 json.stringify()
    JSON.parse() 大小在2-6M之间
    例如： 中奖次数和奖金信息，不用去后端取数据
    2. cookie 
    uid = 1000
        cookie 就是一个字符串， key = val； key2 = val2 存储非常重要的信息，并且在每次http请求的时候都会带上
    3. 异步的
    onsuccess 开始数据业务
    onupgradeneeded 更新数据库
    db.creatObjectStore()
    objectStore.createIndex('email','email',{unique:true})
    4. 事务transaction 
     