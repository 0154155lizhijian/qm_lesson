//index.js
//获取应用实例
import request from '../../request/request'
const app = getApp()

Page({
  data: {
    loadingMore:false,
    totalRecord:0,
    isInit:true,
    scrollHeight:0,
    searchKey:null,
    pageData:[],  //图书数据
    pageIndex:0,   //页码
    // footerIconColor: red,
  },
  onShow: function(){
    wx.getSystemInfo({
      success: (res)  => {
        this.setData({
          scrollHeight: res.windowHeight - (100 * res.windowWidth / 750)
        });
        console.log(this.data.scrollHeight)
    }
    })
  },
  searchInputEvent: function (e) {
    this.setData({ searchKey: e.detail.value });
    console.log(this.data.searchKey)
  },
  searchClickEvent:function(e){
    if(!this.data.searchKey){
      console.log('没有')
      return;
    }
    this.setData({
      pageIndex:0,
      pageData:[]
    });
    requestData.call(this);
  }

 
  });
  function requestData(){
    var _this = this;
    var key = this.data.searchKey;
    var start =this.data.pageIndex;
    this.setData({
      loadingMore:true,
      isInit:false
    });
    console.log(start)
    request.requestSearchBook({key:key,start:start},(data) =>{
      console.log(data);
      if(data.total == 0){
        _this.setData({totalRecord:0});
      }else{
        _this.setData({
          pageData:this.data.pageData.conat(data.books),
          pageIndex:start + 1,
          totalRecord:data.total
        });
        console.log("1"+this.data.pageData)
        console.log("2"+pageData)
      }
    },() =>{
      _this.setData({ totalRecord :0});
    },()=>{
      _this.setData({ loadingMore:false});
    });
    // updateRefreshBall.call(this); //刷新下拉效果变色球
  }
