//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
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
    }
  },
  globalData: {
    userInfo: null,
    globalAccessoriesUrl: [
      { name: "Mouse", link: "/images/Mouse" },
      { name: "Locker", link: "/images/Locker" },
      { name: "Network Cable(2M)", link: "/images/Network Cable 2M" },
      { name: "ThinkPad Adapter for T430 & X230", link: "/images/ThinkPad Adapter for T430 X230" },
      { name: "ThinkPad Adapter for T440, T450, T460, X240, X250 & X260", link: "/images/ThinkPad Adapter for T440, T450, T460, X240, X250 X260" },
    ],
        globalFixAssetsUrl: [
      { name: "ThinkPad T", link: "/images/ThinkPad T" },
      { name: "ThinkPad X", link: "/images/ThinkPad X" },
    ],
  }
})