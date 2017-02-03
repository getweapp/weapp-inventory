var appInstance = getApp()
var sliderWidth = 96; 

console.log(appInstance.globalData.globalUrl);

  Page({
    data: {
       tabs: ["Accessories", "Fix Assets", "iPhone"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,

      imgUrls: [
        '/images/2017_1.jpg',
        '/images/2017_6.png',
        // '/images/2017_5.png',
        // '/images/2017_2.png',
        // '/images/2017_3.png',
        '/images/2017_4.png',
        

        // '/images/2017_7.png',
        // '/images/Mouse.jpg',
        // '/images/Locker.jpg',
        // '/images/Network Cable 2M.jpg',
        // '/images/ThinkPad Adapter for T430 X230.jpg',
        // '/images/ThinkPad Adapter for T440, T450, T460, X240, X250 X260.jpg',
        // '/images/ThinkPad T.jpg',
        // '/images/ThinkPad X.jpg',
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      inventoryAccessories: appInstance.globalData.globalAccessoriesUrl,
      inventoryFixAssets: appInstance.globalData.globalFixAssetsUrl,
    },
    onLoad: function (options) {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    onReady: function () {
      // 生命周期函数--监听页面初次渲染完成
      // String3
    },
    onShow: function () {
      // 生命周期函数--监听页面显示
      // String4
    },
    onItemTap: function (e) {
      wx.navigateTo({
        url: `../item/item?name=${e.currentTarget.dataset.name}&url=${e.currentTarget.dataset.url}`,
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    },
    onSwiperTap: function (e) {
      console.dir(e)
      //  wx.navigateTo({
      //    url: 'String',
      //    success: function(res){
      //      // success
      //    },
      //    fail: function() {
      //      // fail
      //    },
      //    complete: function() {
      //      // complete
      //    }
      //  }) 
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
  })
