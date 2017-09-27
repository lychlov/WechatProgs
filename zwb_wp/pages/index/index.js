//index.js
//获取应用实例
var app = getApp();

var textToSearch = "";

Page({
  data: {
    
    userInfo: {},
    searchTextHidden: true,
    textToSearchInf: "",
    inputShowed: false,
    inputVal: "",
    tipsArray: [{
      message: '101,1234654',
    }, {
      message: '102,12314,123123',
    }, {
      message: '101,213',
    }, {
      message: '403,232332',
    }, {
      message: '301,21323',
    }]
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
    });
    wx.setNavigationBarTitle({
      title: "掌W宝",
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  searchInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      searchTextHidden: false,
      textToSearchInf: textToSearch + "\n",
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
