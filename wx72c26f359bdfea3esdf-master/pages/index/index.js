//index.js
//获取应用实例

var app = getApp()
Page({
  data: {
  },
  checkMap: function (event) {
    wx.navigateTo({
      url: '/pages/view-scale/index',
    })
  },
  getLost: function (event){
    wx.navigateTo({
      url: '/pages/getLost/getLost',
    })
    
  },
  onLoad: function () {
    console.log('onLoad');
  }
})
