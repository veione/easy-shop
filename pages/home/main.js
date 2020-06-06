// pages/home/main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //从全局变量获取状态栏高度
    navHeight: app.globalData.navHeight,
    weatherIcon: 'static/images/cloud.png',
    date: '6月5日',
    temperature: '22~28℃',
    categorys: [
      {"title": "水果馆", "icon": ""},
      {"title": "蔬菜馆", "icon": ""},
      {"title": "肉肉馆", "icon": ""},
      {"title": "家禽馆", "icon": ""},
      {"title": "水产馆", "icon": ""},
      {"title": "蛋蛋馆", "icon": ""},
	    {"title": "豆腐馆", "icon": ""},
      {"title": "生鲜批发", "icon": ""},
      {"title": "5折起抢", "icon": ""},
      {"title": "夏天来了", "icon": ""},
      {"title": "家庭批发", "icon": ""},
      {"title": "牛奶馆", "icon": ""},
      {"title": "烘焙馆", "icon": ""},
      {"title": "农副馆", "icon": ""},
      {"title": "休闲零食", "icon": ""},
      {"title": "酒水乳饮", "icon": ""},
      {"title": "粮油调味", "icon": ""},
      {"title": "餐食料理", "icon": ""},
      {"title": "家具家清", "icon": ""},
      {"title": "服饰穿戴", "icon": ""},
      {"title": "美容个护", "icon": ""},
      {"title": "母婴文体", "icon": ""},
      {"title": "绿植花卉", "icon": ""},
      {"title": "家电数码", "icon": ""}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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