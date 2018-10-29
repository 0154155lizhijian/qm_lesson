1. 组件化
    Component 构成page的一块基石，可复用，可传自定义属性定制
    小程序自身没有提供的，我们可以在components文件夹里自定义
    可在使用第三方提供的自定义组价

    vant 小程序基于此组件框架，70%的工作由组件框架来做，经历了有赞电商项目十几万项目的检验，类似电商的项目，用它ok

2. page.json usingComponent 声明要用的组件，
    wxml 文件由组件组成

3. 有赞是怎么写出来vant

4. van-search 用法聊一聊
    组件是代表着一堆在其内部的标签或子组件，进行统一的向外提供组价功能。
    - 外部，wxml 调用组件
    - 组件内部 vant内部 ，在使用时，不用操作
    - 内部交流， props
    定制性，show-action use-action-slot
    