//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log(new Date().getTime());
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
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
  globalData:{
    userInfo:null,
    usedCommands:[{}],
    results:[{}],
  }
})