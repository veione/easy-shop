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
    selectAll: false,
    editStatus: false,
    checkedNum: 0,
    cartItems2: [],
    cartItems: [
      {
        "itemId": "1043782721",
        "num": 1,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": false,
        "isTouchMove": false
      },
      {
        "itemId": "1043782722",
        "num": 1,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": false,
        "isTouchMove": false
      },
      {
        "itemId": "1043782723",
        "num": 1,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": false,
        "isTouchMove": false
      },
      {
        "itemId": "1043782724",
        "num": 1,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": false,
        "isTouchMove": false
      },
      {
        "itemId": "1043782725",
        "num": 1,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": false,
        "isTouchMove": false
      },
      {
        "itemId": "1043782726",
        "num": 1,
        "title": "民田妃子笑荔枝500g/盒正负50g",
        "desc": "500g正负50g",
        "cover": "/static/images/product/20200609154125.jpg",
        "price": 6.99,
        "checked": false,
        "isTouchMove": false
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
    this.calcCartNum();

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
  },
  onSelectAll: function(e) {
    this.data.cartItems.forEach(item=>{
      item.checked = !this.data.selectAll;
    })
    this.setData({
      selectAll: !this.data.selectAll,
      cartItems: this.data.cartItems
    });
    this.calcTotalMoney();
    this.calcCheckedNum();
  },
  calcCheckedNum: function() {
    var checkedNum = 0;
    this.data.cartItems.forEach(item=>{
      if (item.checked) {
        checkedNum++;
      }
    });
    this.setData({
      checkedNum: checkedNum
    })
  },
  calcCartNum: function() {
    var cartItemCount = this.data.cartItems.length;
    if (cartItemCount > 0) {
      wx.setTabBarBadge({//tabbar右上角添加文本
        index: 2, //tabbar下标
        text: '' + cartItemCount //显示的内容
      });
    } else {
      wx.removeTabBarBadge({
        index: 2,
      })
    }
  },
  calcTotalMoney: function() {
    var totalMoney = 0;
    this.data.cartItems.forEach(item=>{
      if (item.checked) {
        totalMoney = util.add(totalMoney, util.mul(item.price, item.num));
      }
    });
    this.setData({
      totalMoney: totalMoney
    })
  },
  onIncrement: function(e) {
    var that = this,
    index = e.detail.itemId;//当前索引
    that.data.cartItems.forEach(function (v, i) {
      if (v.itemId == index) {
          v.num++;
      }
    })

    this.setData({
      cartItems: this.data.cartItems
    })
    this.calcCartNum();
    this.calcTotalMoney();
    this.calcCheckedNum();
  },
  onDecrease: function(e) {
    var that = this,
    flag = false,
    index = e.detail.itemId;//当前索引
    that.data.cartItems.forEach(function (v, i) {
      if (v.itemId == index) {
          var num = v.num - 1;
          if (num < 1) {
            wx.showModal({
              title: '确认删除',
              content: '您确定要删除商品吗？',
              success: function(e) {
                if (e.confirm) {
                  that.data.cartItems.splice(i, 1)
                  that.setData({
                    cartItems: that.data.cartItems
                  })
                  flag = true;
                  that.calcCartNum();
                  that.calcTotalMoney();
                  this.calcCheckedNum();
                }
              }
            })
          } else {
            v.num--;
            flag = true;
          }
      }
    })

    if (flag) {
      this.setData({
        cartItems: this.data.cartItems
      })
      this.calcCartNum();
      this.calcCheckedNum();
    }
  },

  onChecked: function(e) {
    var that = this,
    index = e.detail.itemId;//当前索引
    that.data.cartItems.forEach(function (v, i) {
      if (v.itemId == index) {
          v.checked = !v.checked;
      }
    })

    this.setData({
      cartItems: this.data.cartItems
    })
    that.calcCartNum();
    this.calcTotalMoney();
    this.calcCheckedNum();
  },
  onItemDelete: function(e) {
    var that = this,
    index = e.detail.itemId;//当前索引
    that.data.cartItems.forEach(function (v, i) {
      if (v.itemId == index) {
        that.data.cartItems.splice(i, 1)
        that.setData({
          cartItems: that.data.cartItems
        })
        wx.showToast({
          title: '商品已删除！',
          icon: 'success'
        })
        that.calcCartNum();
        that.calcTotalMoney();
        this.calcCheckedNum();
      }
    })
  },
  onEdit: function(e) {
    this.setData({
      editStatus: !this.data.editStatus
    })
  },
  onDeleteSelectItem: function() {
    var that = this,
    checkedArr = [];

    this.data.cartItems.forEach(function (item, i) {
      if (item.checked) {
        checkedArr.push(item.itemId);
      }
    });

    checkedArr.forEach(itemId=>{
      that.data.cartItems.forEach(function (item, index) {
        if (item.itemId == itemId) {
          that.data.cartItems.splice(index, 1);
        }
      })
    });

    this.setData({
      cartItems: that.data.cartItems
    })
    this.calcCheckedNum();
    this.calcCartNum();
  }
})