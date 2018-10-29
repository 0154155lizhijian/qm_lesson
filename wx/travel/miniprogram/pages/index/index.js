wx.cloud.init({
})
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    item:{
      user:{
        avatar:'',
        nickname:"为什么",
        summary:"什么鬼"
      }
    }
  },
  onLoad: function() {
    db.collection("ads").get({
      success: res => {
        // cons/ddole.log(res)
        this.setData({
          ads: res.data
        })
      }
    })
  }
})