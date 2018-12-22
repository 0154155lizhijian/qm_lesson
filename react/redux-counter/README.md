- 代码结构
  store 
    状态仓库，状态多，难以管理  
    redux 共享和管理状态 

- 组件通信
  api
  
  统一状态树 store 唯一
  1. store.getState() 只读
  2. store.dispatch({
      type:'INCREMENT'
  })
  相应的reducer 得以计算 返回新的状态
  MVVM 更新UI