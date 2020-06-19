// pages/order/search/main.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: '64px',
    contentHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    windowRemainHeight: 0,
    keyword: '',
    showSearchHistory: true,
    historyOrderList: [],
    searchHistorys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth,
      searchHistorys: wx.getStorageSync('productSearchHistorys') || []
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
    query.select('.titlebar').boundingClientRect(function (rect) {
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
  onSearch: function() {
    var keyword = this.data.keyword.trim();
    if (keyword.length == 0) {
      wx.showToast({
        title: '请先输入关键字再进行搜索',
        icon: 'none'
      })
    } else {
      var searchHistorys = this.data.searchHistorys;
      var oldValue = searchHistorys.find(function(obj,index,arr){
        　return obj.value==keyword;
      });

    if (searchHistorys.length < 30  && oldValue == undefined) {
      searchHistorys.unshift({
        value: this.data.keyword,
        id: searchHistorys.length
      })
    } else if (oldValue == undefined){
      searchHistorys.pop();//删除旧的时间最早的第一条
      searchHistorys.unshift({
        value: this.data.keyword,
        id: searchHistorys.length
      })
    }
    var orderList = [{},{},{}]
    this.setData({
      showSearchHistory: false,
      //historyOrderList: orderList
      searchHistorys: searchHistorys
    })

    //将历史记录数组整体存储到缓存中
    wx.setStorageSync('productSearchHistorys', searchHistorys);
    }
  },
  onInput: function(event) {
    this.setData({
      keyword: event.detail.value
    })
  },
  onClearSearch: function() {
    this.setData({
      keyword: '',
      showSearchHistory: true,
    })
  },
  onClearSearchHistory: function() {
    wx.clearStorageSync('productSearchHistorys');
    this.setData({
      searchHistorys: []
    })
  },
  onSearchHistoryValue: function(e) {
    var keyword = e.target.dataset.value;
    this.setData({
      keyword: keyword
    })
    this.onSearch()
  }
})