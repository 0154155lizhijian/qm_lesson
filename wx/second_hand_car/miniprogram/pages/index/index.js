wx.cloud.init({

})
const db = wx.cloud.database();

Page({
  data: {
    ads: [],
    navigation_bar_lists:
      // [
        [{
          category:'二手车',
          icon_type :'che',
        },{
          category:'严选车',
          icon_type :'mai',
        },{
          category:'免费卖车',
          icon_type:'qiandai',
        },{
          category:"快速卖车",
          icon_type:"mai1",
        },{
          category:"估价",
          icon_type:"maichegujiapsd01",
        },{
          category:"查成交",
          icon_type:"chengjiao",
        },{
          category:"准新车",
          icon_type:"haopingwuxing",
        },{
          category:"降价急售",
          icon_type:"shandian",
        }
      ]
    //   ,[
    //     {
    //       category:"今日超值",
    //       icon_type:"fire",
    //     },{
    //       category:"练手车",
    //       icon_type:"quxuechelian",
    //     },{
    //       category:"热销排行",
    //       icon_type:"gust-branch",
    //     },{
    //       category:"百科",
    //       icon_type:"baike-tianchong",
    //     }
    //   ]
    // ]
     
    
  },
  onLoad: function () {
    db.collection("ads").get({
      success: res => {
        this.setData({
          ads: res.data
        })
      }
    })
  }
})