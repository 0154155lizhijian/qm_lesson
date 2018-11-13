// components/badge/index.js
Component({
  externalClasses:['wux-class-badge'],
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:0,
      observer(newVal){          //监听外界
        console.log(newVal)
        const {overflowCount} = this.data
        const finalCount = newVal >= overflowCount? `${overflowCount}+`:newVal
        this.setData({
          finalCount
        })
      }
    },
    overflowCount:{
      type:Number,
      value:99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // count 是外来的
    // overfolw也可以是外来的
    //?内部数据...显示的数据可以以finalcount显示
    finalCount:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
