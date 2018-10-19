- 模板里要有 if else for 指令
模板里存在着业务逻辑  wx：if  wx:else wx:for


界面状态 登录前， 登录后状态

数据驱动界面状态

hasUserInfo 决定了界面有两种界面状态
因此联想到 wx:if wx:else  

- 微信的生态及机制
  小程序，获取用户信任和信息，在微信里，
  小程序分享到讨论组


  用户信息，是隐私， 要获取用户的许可

  button 询问 (特殊的按钮 open-type = "getUserInfo"  bindgetUserInfo='getUserInfo') => 
  block 显示内容     的过程
  直接

- setData()
  改变data里的数据里面的值
  并且拥有让界面里相关的部分热更新的能力

- wx:key
循环一定要加一个唯一性的key  来提升性能
列表值发生改变时，如果直接替换，整个列表的wxml会进行数据刷新，影响运行速度，
key ， 找到对应发生改变的地方，进行单一的一个更新

- 设计数据
lists = [已完成2项，未完成8项]
lists       取全部data
donelists   已经完成的data
undonelists 未完成的data
v-for= "{{lists}}"


currentState = 'all'
v-if + v-for

界面状态
    多种状态
1. tarbar .active Ui状态 => 数据驱动, currentState = 'all'
2. 任务列表 列表数据，UI状态 除了lists外，只要再加一个即可  currentList
3. 



