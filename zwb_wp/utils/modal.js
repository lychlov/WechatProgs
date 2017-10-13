var showAuthText = function () {
  wx.showModal({
    title: '用户未验证',
    content: '用户您好，您尚未完成用户验证，无法使用掌W宝功能，请前往验证。',
    confirmText: "前往验证",
    cancelText: "暂不验证",
    success: function (res) {
      console.log(res);
      if (res.confirm) {
        wx.switchTab({
          url: '/pages/mine/mine',
        })
      } else {

      }
    }
  });
}


module.exports = {
  showAuthText: showAuthText,
}