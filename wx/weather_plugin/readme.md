- Component 组件
    来自Facebook  用搭积木的概念来类比做网站。
    我们的网页不再是由标签这个原子级别的构成，  div+css
    由组件构成 swiper scroll-view mapview 一块块积木 有能力表达自己特定的功能或者表现
    是有区块的，功能块的 
    calendar 组件，第三方

- 自定义的组件开发
    components 是MVVM架构的核心
    它跟pages 是平级的，
    component 构成page.json 文件，
    {
        'usingComponents'：{
            "icon":"../../components/icon/index"
        }
    }
    icon组件
    在应用之中，会用到一些图标，字体图标
    edit add map home 
    alley iconfont ttf 文件，样式   // 原子级别的编程
    相对独立的 一个组件
    可以在工程在页面都进行复用


