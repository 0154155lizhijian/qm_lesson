- redux 让所有的状态共享，读可以，写则要遵守规则，这也是redux的基本规则
  只有action 可以修改state(执行相应的reducer),组件只能dispath一个action

- reducer 是不可以直接调用的，
只有action 才可以对状态进行操作，
组件 不可以直接和 reducer 进行联系  因此有了中间函数  dispatch() 
要保护数据，因此需要设置reducer 提供并且精确计算状态的函数，组件只有dispath 一个action才能执行reducer
