

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["fake查询", "历史查询", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    historyList: [
      { commond: "101,12313", timestamp: "2017/9/22", id: "1" },
      { commond: "101,12313", timestamp: "2017/9/23", id: "2" },
      { commond: "101,12313", timestamp: "2017/9/24", id: "3" }
    ],
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.setNavigationBarTitle({
      title: "历史查询",
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
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
      url: '../result/result?id='+listItemId
    })
  }
});