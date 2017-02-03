//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        // return util.formatTime(new Date(log))
        return util.formatDateTime(new Date(log), "yyyy/MM/dd hh:mm:ss")
      })
    })
  }
})
