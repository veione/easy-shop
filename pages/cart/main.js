// pages/cart/main.js
const util = require('../../utils/util');

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
    totalMoney: 0,
    cartItems: [
      {
        "itemId": "1043782728",
        "num": 2,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": true
      },
      {
        "itemId": "1043782728",
        "num": 2,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": true
      },
      {
        "itemId": "1043782728",
        "num": 2,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": true
      },
      {
        "itemId": "1043782728",
        "num": 2,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": true
      },
      {
        "itemId": "1043782728",
        "num": 2,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": true
      },
      {
        "itemId": "1043782728",
        "num": 2,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": true
      }
    ] //购物车物品
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   /** this.setData({
      cartItems: wx.getStorageSync('cartItems') || []
    })*/
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth,
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
    var cartItemCount = this.data.cartItems.length;
    if (cartItemCount > 0) {
      wx.setTabBarBadge({//tabbar右上角添加文本
        index: 2, ////tabbar下标
        text: '' + cartItemCount //显示的内容
      });
    }

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
  onSelectAllChange: function(e) {
    var value = e.detail.value[0];
    var totalMoney = 0;
    if (value && value != undefined && value != '') {
      this.data.cartItems.forEach(item=>{
        totalMoney += util.add(totalMoney, util.mul(item.price, item.num));
      });
    }
    this.setData({
      totalMoney: totalMoney
    })
  },
  onCartItemChange: function(e) {
    console.log('onCartItemChange', e);
  },
  onMinusCount: function(e) {
    console.log("onMinusCount", e)
  },
  onAddCount: function(e) {
    console.log("onAddCount", e)
  }
})