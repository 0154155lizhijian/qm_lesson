node性能好 异步无阻塞的
异步可用最快的开放对文件或者资源的控制，
IO 数据库 ，文件操作， 高访问量时网站性能瓶颈，
文件要锁定，
readFileSync 阻塞代码，同一时刻拒绝了更多的访问，

文件的遍历查找，异步的，使用了readdirSync同步阻塞式的写法，
1.src 目录下找出所有的文件
    stat isFile | isDir
    2.如果是文件，则加入数组
        3.反之，如果不是文件，是目录，则重复第一步
        

- 复杂事情，可以分成n个s相似的简单事务，
- 退出条件，如果是文件，则退出，如果不是，则重复
即递归的方式解决遍历