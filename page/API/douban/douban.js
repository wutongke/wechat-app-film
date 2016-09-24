Page({
  data: {
    moveList: [],
    banners: [],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 1000
  },
   tapMenuItem: function (e) {
    var params = e.currentTarget.dataset;
    var target = '../douban-detail/douban-detail?id='+params.id+'&title='+params.title;
    wx.navigateTo({
        url: target
    });
  },
  onLoad: function () {
    this.getData();
  },

  getData: function () {
    var that = this;
    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters?city=beijing",
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
          const data = res.data.subjects;
          that.setData({
            banners: data.slice(0,3),
            moveList: data.slice(3)
        });
      }
    });
  }

})
