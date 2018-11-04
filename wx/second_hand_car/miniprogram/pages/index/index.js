wx.cloud.init({

})
const db = wx.cloud.database();

Page({
  data: {
    ads: [],
    beforeColor: "#CBD1D9",//指示点颜色
    afterColor: "#22A038",//当前选中的指示点颜色
    classify:[
      {type:'5万以下',
       hasIcon:false,
       icon:''
    },'5-10万','10-15万','15万以上','大众','日产','现代','吉利','别克','雪佛兰','丰田','更多'],

    navigation_bar_lists:
      [
        [{
          category:'二手车',
          icon_type :'che',
          color:'#0DC62A',
          fontsize:'60rpx',
        },{
          category:'严选车',
          icon_type :'mai',
          color:'#6671ED',
          fontsize:'80rpx',
        },{
          category:'免费卖车',
          icon_type:'qiandai',
          color:'#13DDB2',
          fontsize:'60rpx',
        },{
          category:"快速卖车",
          icon_type:"mai1",
          color:'#FFA441',
          fontsize:'46rpx',
        },{
          category:"估价",
          icon_type:"maichegujiapsd01",
          color:'#F75B5B',
          fontsize:'60rpx',
        },{
          category:"查成交",
          icon_type:"chengjiao",
          color:'#2A92ED',
          fontsize:'60rpx',
        },{
          category:"准新车",
          icon_type:"haopingwuxing",
          color:'#F65655',
          fontsize:'60rpx',
        },{
          category:"降价急售",
          icon_type:"shandian",
          color:'#FFCF43',
          fontsize:'60rpx',
        }
      ]
      ,[
        {
          category:"今日超值",
          icon_type:"fire",
          color:'#FC781B',
          fontsize:'60rpx'
        },{
          category:"练手车",
          icon_type:"quxuechelian",
          color:'#0CC129',
          fontsize:'50rpx'
        },{
          category:"热销排行",
          icon_type:"guest-branch",
          color:'#FFA23E',
          fontsize:'60rpx' 
        },{
          category:"百科",
          icon_type:"baike-tianchong",
          color:'#3194EF',
          fontsize:'60rpx'
        }
      ]
    ]
  },
  onLoad: function () {
    db.collection("ads").get({
      success: res => {
        this.setData({
          ads: res.data
        })
      }
    })
  },


})

