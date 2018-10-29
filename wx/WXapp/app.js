// App({
//   onLaunch:function(){
//     console.log('程序启动');
//     wx.request({
//       url: 'https://resources.ninghao.net/wxapp-case/db.json',
//       header: {
//         'Content-Type': 'application/json'
//       },
//       success: function(res) {
//         // this.slides = res.data.slides
//         console.log(res);
//         // const{slides,vehicles,stories} = res.data;
//         // console.log(slides,vehicles,stories);
//         // this.globalData.slides = slides;
//         // this.globalData.vehicles = vehicles;
//         // this.globalData.stories =stories;

//         // let a = {};
//         Object.assign(this.globalData,res.data,res.data,{
//           'friend':'唐唐'
//         })
//         console.log(this.globalData)
//       },
//       error:function(err){
//         console.log(err)
//       }
//     })
    
//   },
//   // 全局的数据app.js 是全局的，
//   globalData:{
  
      
//   }
  

// })


//app.js
App({
  onLaunch: function () {
    console.log('应用起动了');
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        Object.assign(this.globalData,response.data);
      },
    })
    console.log(this.globalData)
  },
  // 全局的数据 App.js 是全局的，
  // 用户的登录状态
  globalData: {
  }
})