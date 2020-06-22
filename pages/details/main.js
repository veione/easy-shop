// pages/details/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: '64px',
    contentHeight: 0,
    tabbarHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    windowRemainHeight: 0,
    currentIndex: 0,
    "firstList": [{ name: 'w券1', money: '5.00' }, { name: 'w券2', money: '50.00'}],
    "secondList": [{ name: 'y券1', money: '10.00' }, { name: 'y券2', money: '20.00' }],
    "thirdList": [{ name: 'g券1', money: '30.00' }, { name: 'g券2', money: '40.00' }],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    imgUrls: [
      '../../static/images/product/20200609154211.jpg',
      '../../static/images/product/20200609154222.jpg',
      '../../static/images/product/20200609154227.jpg',
      '../../static/images/product/20200609154218.jpg',
      '../../static/images/product/20200609154125.jpg',
    ],
    detailImageUrls: [
      '../../static/images/product/detail/20200610142353.jpg',
      '../../static/images/product/detail/20200610142429.jpg',
      '../../static/images/product/detail/20200610142437.jpg',
      '../../static/images/product/detail/20200610142445.jpg',
      '../../static/images/product/detail/20200610142454.jpg',
      '../../static/images/product/detail/20200610142503.jpg',
    ],
    current: 0,
  },
  swiperChange: function(e) {
    var that = this;
    if (e.detail.source == 'touch' || e.detail.source ==  'autoplay') {
      that.setData({
        current: e.detail.current,
      })
    }
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
    query.select('.topbar').boundingClientRect(function (rect) {
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
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =e.currentTarget.dataset.idx;
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: currentPageIndex
    })
  },
  toHome: function() {
    wx.switchTab({
      url: '/pages/home/main',
    })
  },
  toCart: function() {
    wx.switchTab({
      url: '/pages/cart/main',
    })
  },
  onShare: function(e) {
    console.log('share product');
  },
  onAddToCart: function(e) {
    wx.showToast({
      title: '加入购物车成功！',
      icon: 'none'
    })
  },
  onBuy: function(e) {
    wx.navigateTo({
      url: '/pages/checkout/main',
    })
  },
  toDetailsTab: function() {
    this.setData({
      currentIndex: 0
    })
  }
})