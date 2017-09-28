
var util = require('../../utils/usedCommandsHandler.js')
//index.js
//获取应用实例
var app = getApp();
var tipsArray = [{}];
var textToSearch = "";

Page({
  data: {

    userInfo: {},
    searchTextHidden: true,
    textToSearchInf: "",
    inputShowed: false,
    inputVal: "",
    tipsArray: [{
      timestamp: "1506564348174",
      command: '101,1234654',
    }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    tipsArray = util.readUsedCommands();
    console.log(tipsArray);
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        tipsArray: tipsArray,
      })
    });


    /*
    wx.setNavigationBarTitle({
      title: "掌W宝",
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    });
    */
  },


  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  searchInput: function () {
    
    if (textToSearch.length > 0) {
      this.setData({
        inputVal: "",
        inputShowed: false,
        searchTextHidden: false,
        textToSearchInf: textToSearch + "\n",
      });
      tipsArray = util.addUsedCommmand(tipsArray, textToSearch);
      //console.log(tipsArray);
      util.storeUsedCommands(tipsArray);
      this.setData({
        tipsArray: util.getUsedCommands(tipsArray),
      });
      wx.navigateTo({
        url: '../result/result?command=' + textToSearch,
      });
    };







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
  },
  tipClick: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../result/result?command=' + e.currentTarget.id,
    })
  },
});
