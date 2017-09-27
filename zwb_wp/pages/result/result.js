// pages/result/result.js
var listItemId = 1;
var timestamp;
var command = "";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timestamp: "",
    command: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("result onLoad");
    //console.log(options.id);
    command = options.command;
    timestamp = options.timestamp;
    console.log(typeof (command) == "undefined");
    console.log(typeof (timestamp))
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