// pages/user/main.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: app.globalData.navHeight,
    titleBarHeight: 0,
    displayPickupDialog: false,
    orderMenus: [
      {id: 1001, type: 0, 'icon': '/static/images/usercenter/icon-order-list.png', name: '全部订单'},
      {id: 1002, type: 1, 'icon': '/static/images/usercenter/icon-wallet.png', name: '代付款'},
      {id: 1003, type: 2, 'icon': '/static/images/usercenter/icon-car.png', name: '待提货'},
      {id: 1004, type: 3, 'icon': '/static/images/usercenter/icon-extract.png', name: '已提货'},
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
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.title-bar').boundingClientRect(function (rect) {
      that.setData({
        titleBarHeight: rect.height + 'px'
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
  handleSettings: function() {
    console.log('setting button tap event.')
  },
  goShopping: function() {
    wx.switchTab({
      url: '/pages/home/main',
    })
  },
  openPickupDialog: function() {
    this.setData({
      displayPickupDialog: true
    })
  },
  closePickupDialog: function() {
    this.setData({
      displayPickupDialog: false
    })
  },
  gotoOrderManage: function(e) {
    wx.navigateTo({
      url: '/pages/order/manage/main?index=' + e.currentTarget.dataset.index,
    })
  }
})