class Promise{
    constructor(executor){    //构造函数
        this.status = 'pending'; //new完了等待处理的状态
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallBacks = [];
        this.onRejectedCallBacks = [];
        let resolve = (value) => {
            this.status = 'resolved';
            this.value = value;
            // console.log(this.value)
            this.onResolveCallBacks.forEach(fn => fn(this.value))
        }
        let reject = (reason) => {
            this.status = 'rejected';
            this.value = reason;
            this.onRejectedCallBacks.forEach(fn =>fn())
        }
        executor(resolve,reject);
        // 开启promise
        // new 异步任务开始执行
    };
    then(onFullfield,onRejected){
        if(this.status === 'pending'){
            this.onResolveCallBacks.push(()=>{onFullfield()});
            this.onRejectedCallBacks.push(()=>{onRejected});
        }
        // if(this.status === 'resolved'){
        //     onFullfield(this.value)
        // }
        // if(this.status === 'rejected'){
        //     onRejected(this.value)
        // }
    }
}

module.exports = Promise;