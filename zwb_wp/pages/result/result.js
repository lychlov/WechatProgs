var util = require('../../utils/resultsHandler.js')
var ipStr = "10.217.8.213";
//var ipStr = "211.138.20.238";
// pages/result/result.js
var listItemId = 1;
var timestamp;
var command = "";
var result = "";
var resultsArray = new Array;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    timestamp: "",
    resultsArray: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    console.log("result onLoad");
    //console.log(options.id);
    command = options.command;
    timestamp = options.timestamp;
    console.log(typeof (command) != "undefined");
    //resultsArray = util.getResultsArray().slice(0);
    console.log(resultsArray);
    //新查询
    if (typeof (command) != "undefined") {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',

      });

      wx.request({
        url: 'http://' + ipStr + ':8080/wxHost4/restful/command/getResult?user=chengzhikun&', //仅为示例，并非真实的接口地址
        data: {
          command: command,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)

          result = res.data;
          var typeValue = util.getTypeValue(command);
          console.log(typeValue);
          if (typeValue=='alarm'){
            result = util.cutAlarm(result);
          }
          //result = Date.now();

          wx.hideToast();
          var timestamp = Date.now();
          resultsArray = util.addResult(resultsArray, command, result, timestamp, typeValue);
          util.storeResultsArray(resultsArray);
          console.log(resultsArray);
          that.setData({
            resultsArray: resultsArray,
            timestamp: timestamp,
          });
        }
      });
    };
    //历史查询
    if (typeof (timestamp) != "undefined") {
      this.setData({
        resultsArray: resultsArray,
        timestamp: timestamp,
      })
      console.log(timestamp);
      console.log(resultsArray);


    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})