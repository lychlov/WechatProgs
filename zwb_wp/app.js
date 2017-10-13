//app.js
var modal =  require('/utils/modal.js');
App({
  onLaunch: function () {


    //



    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    try {
      var value = wx.getStorageSync('userStatus')
      if (value) {
        // Do something with return value
        this.globalData.userStatus = value.flag;
        this.globalData.userName = value.userName;
        console.log(this.globalData.userName);
        
      }
    } catch (e) {
      // Do something when catch error
    };
    if (!this.globalData.userStatus) {
      modal.showAuthText();
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo

              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    };
    /*
    wx.setStorage({
      key: 'results',
      data: [
      { command: "101,12313", timestamp: "1506523254201", result: "1" },
      { command: "101,12313", timestamp: "1506523254233", result: "2" },
      { command: "101,12313", timestamp: "1506523250000", result: "3" }
    ]
    });
    */
  },
  globalData: {
    userStatus: false,
    userName:"",
    userPhoneNumber: null,
    userInfo: null,
    usedCommands: [{}],
    results: [{}],
  }
})