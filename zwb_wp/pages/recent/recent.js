var util = require('../../utils/resultsHandler.js')

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var resultsArray = [{}];
Page({
  data: {
    tabs: ["fake查询", "历史查询", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    //historyList: [],
  },

  onLoad: function () {
    var that = this;
    /*tab长度的操作
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
        

      }
    });
    */
    wx.setNavigationBarTitle({
      title: "历史查询",
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    });

    resultsArray = util.getResultsArray();
    console.log(resultsArray);
    this.setData({
      historyList: util.getReverse(resultsArray),
    });
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  listItemClick: function (e) {
    console.log(e.currentTarget.id);
    var listItemId = e.currentTarget.id;
    wx.navigateTo({
      url: '../result/result?timestamp='+listItemId,
    })
  },
  onShow:function(){
    resultsArray = util.getResultsArray();
    console.log(resultsArray);
    this.setData({
      historyList: util.getReverse(resultsArray),
    });
  }
});