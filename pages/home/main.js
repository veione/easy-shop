// pages/home/main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //从全局变量获取状态栏高度
    titleBarHeight: 0,
    navBarHeight: '64px',
    contentHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    windowRemainHeight: 0,
    navHeight: app.globalData.navHeight,
    weatherIcon: 'static/images/cloud.png',
    date: '6月21日',
    temperature: '25~34℃',
    categoryList: [
      {"id": "1001", "title": "水果馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1002", "title": "蔬菜馆", "icon": "../../static/images/category/vegetables.png"},
      {"id": "1003", "title": "肉肉馆", "icon": "../../static/images/category/meat.png"},
      {"id": "1004", "title": "家禽馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1005", "title": "水产馆", "icon": "../../static/images/category/fish.png"},
      {"id": "1006", "title": "蛋蛋馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1007", "title": "豆腐馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1008", "title": "生鲜批发", "icon": "../../static/images/category/fruit.png"},
      {"id": "1009", "title": "5折起抢", "icon": "../../static/images/category/fruit.png"},
      {"id": "1010", "title": "夏天来了", "icon": "../../static/images/category/fruit.png"},
      {"id": "1011", "title": "家庭批发", "icon": "../../static/images/category/fruit.png"},
      {"id": "1012", "title": "牛奶馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1013", "title": "烘焙馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1014", "title": "农副馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1015", "title": "休闲零食", "icon": "../../static/images/category/fruit.png"},
      {"id": "1016", "title": "酒水乳饮", "icon": "../../static/images/category/fruit.png"},
      {"id": "1017", "title": "粮油调味", "icon": "../../static/images/category/fruit.png"},
      {"id": "1018", "title": "餐食料理", "icon": "../../static/images/category/fruit.png"},
      {"id": "1019", "title": "家具家清", "icon": "../../static/images/category/fruit.png"},
      {"id": "1020", "title": "服饰穿戴", "icon": "../../static/images/category/fruit.png"},
      {"id": "1021", "title": "美容个护", "icon": "../../static/images/category/fruit.png"},
      {"id": "1022", "title": "母婴文体", "icon": "../../static/images/category/fruit.png"},
      {"id": "1023", "title": "绿植花卉", "icon": "../../static/images/category/flower.png"},
      {"id": "1024", "title": "家电数码", "icon": "../../static/images/category/phone.png"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth
    })
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
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    var navBarHeight = 0;
    query.select('.navbar').boundingClientRect(function (rect) {
      navBarHeight = rect.height;
      that.setData({
        navBarHeight: navBarHeight + 'px',
        contentHeight: (that.data.windowHeight - navBarHeight) + 'px'
      })
    }).exec();
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
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInf: true
    })
  },
  handleTap: function(e) {
    console.log('user tap searchbar,' + e);
    wx.navigateTo({
      url: '/pages/search/main',
    })
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})