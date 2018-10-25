const db = wx.cloud.database();
const userInfo = db.collection('userInfo')


Page({
  data:{
    userList:[]
  },
  getUserInfo: function(result){
    console.log(result);
    // openId 用户独有， 拿不到， 云函数可以拿到，需要好几个接口
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        // console.log(res)
        // 用户添加
        userInfo.add({
          data: result.detail.userInfo
        }).then(res =>{
          console.log(res);
        })
      }
    })
  },
  onSharrAppMessage:(res) => {
    return{
      title:'唐唐的私照APP',
      path:'/pages/index/index',
      imagePath:'https://636c-cloude-1257892955.tcb.qcloud.la/122430.95152406214.png',
      success: res => {
        console.log('转发成功')
      },
      fail: res => {
        console.log('转发失败')
      }
    }
  }
})