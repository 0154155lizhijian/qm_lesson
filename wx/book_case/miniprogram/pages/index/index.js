//index.js

// 云开发时代，服务器没有实指，动态分配，动态扩容
// 数据库使用的是mongodb database sdk get() where() update() 
// database -> collection -> document json


const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command

const app = getApp()

Page({
  data: {
    book_list : [],

  },

  onLoad: function(options) {
    // 数据库sql  select* from my book
    // mongodb nosql db.find({})
    book.get({
      success:res =>{
        console.log(res);
        this.setData({
          book_list:res.data
        })
      }
    })
  }
})
