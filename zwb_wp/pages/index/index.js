//index.js
//获取应用实例
var app = getApp();
var text_11="扫描下方二维码\n";
var textToSearch="";

Page({
  data: {
    text_1:text_11,
    userInfo: {},
    searchTextHidden:true,
    textToSearchInf:"",
    inputShowed: false,
    inputVal: ""
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  searchInput: function () {
    this.setData({
      inputVal:"",
      inputShowed: false,
      searchTextHidden: false,
      textToSearchInf: textToSearch+"\n",
    });
    
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    textToSearch = e.detail.value;
    this.setData({
      inputVal: e.detail.value,
      
    });
  }
});
