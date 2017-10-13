// pages/mine/mine.js
var app = getApp();
var userName = "";
var userPhoneNumber = "";
//var ipStr = "10.217.8.213:8080";
var ipStr = "wxapp.loyowanwan.cc";
var userStatus = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userStatus: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
      title: "我的",
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    });
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

  },

  binduserNameInput: function (e) {
    userName = e.detail.value
  },

  bindPhoneInput: function (e) {
    userPhoneNumber = e.detail.value
  },

  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  authTap: function (e) {
    var that = this;

    if (userName == "" | userPhoneNumber == "") {
      wx.showToast({
        title: '请输入用户信息',
      })
    } else {
      wx.showToast({
        title: '验证中...',
        icon: 'loading',
      });
      wx.request({
        url: 'http://' + ipStr + '/wxHost4/restful/user/authUser', //仅为示例，并非真实的接口地址
        data: {
          cellphone: userPhoneNumber,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data);
          wx.hideToast();

          if (userName == res.data) {
            userStatus = true;
            wx.showToast({
              title: '验证成功',
              icon: "success",
              duration: 1300,
            });
            app.globalData.userStatus = true;
            app.globalData.userName = res.data;

            console.log(app.globalData.userStatus);

            try {
              wx.setStorageSync('userStatus', { flag: true, userName: res.data })
            } catch (e) {
            };
          } else {
            wx.showToast({
              title: '验证失败',
              icon: "success",
              duration: 1300,
            })
          }
        },
        fail: function () {
          wx.hideToast();
          wx.showToast({
            title: '验证失败',
            icon: "success",
            duration: 1300,
          })
        },
      });

    }
  }
})