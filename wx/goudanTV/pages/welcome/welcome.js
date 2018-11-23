// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {
      avatarUrl: 'https://tvax3.sinaimg.cn/crop.8.7.322.322.180/8970ff1ely8frdenkcgutj209k09kdgw.jpg'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
        title: `狗蛋TV`
      }),
      wx.onAccelerometerChange((res) => {
        let angle = -(res.x * 30).toFixed(1);
        if (angle > 14) {
          angle = 14;
        } else if (angle < -14) {
          angle = -14;
        }
        if (this.data.angle !== angle) {
          this.setData({
            angle: angle
          });
        }
      });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    setTimeout(() => {
      this.setData({
        remind: ''
      });
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    setTimeout(()=>{
      let userInfo = wx.getStorageSync('userInfo')
      let dialogComponent = this.selectComponent('.wxc-dialog');
      if (!userInfo) {
        dialogComponent && dialogComponent.show();
      } else {
        this.setData({
          userInfo: userInfo
        })
        dialogComponent && dialogComponent.hide();
      }
    },1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  goToIndex() {
    wx.switchTab({
      url: '../music/music',
    });
  },
  onConfirm(e) { // 点击允许
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
    let userInfo = JSON.parse(e.detail.detail.rawData)
    if (!userInfo) {
      return;
    }
    this.setData({
      userInfo: userInfo
    })
    wx.setStorageSync('userInfo', userInfo)
  },
  onCancel() { // 点击拒绝
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
  }

})