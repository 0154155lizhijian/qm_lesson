中间？中间件？
UI    <->  Redux
middleware 生态npm

UI dispatch INCREMENT_ASYNC
不知道何时触发   可以使用订阅发布模式

saga是redux 状态异步处理的中间件，
原生的react 通过生命周期或者业务逻辑，来异步请求数据，耦合了redux数据管理业务在UI之中，是不可取的。
- 异步是绝对不可能改变的，(axios,定时器)
promise + generator*yield / async await
放到saga文件中
watch 每一个actionType,take 给一个异步函数去执行，位于中间件中，仍然属于redux
createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);
takeEvery(ActionType,gen);

- redux 状态最终仍然是同步处理的，
    put 在saga内部dispatch同步action

- 异步流程很多，所以把他合为一处 => all