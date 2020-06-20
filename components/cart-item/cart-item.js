// components/cart-item/cart-item.js
const util = require('../../utils/util');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    startX: 0, //开始坐标
    startY: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //手指触摸动作开始 记录起点X坐标
    onItemTouchStart: function(e) {
      //开始触摸时 重置所有删除
      this.data.items.forEach(function (v, i) {
        if (v.isTouchMove) {//只操作为true的
          v.isTouchMove = false;
        }
      })
  
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
    },
    //滑动事件处理
    onItemTouchMove: function(e) {
      var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = util.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

      that.data.items.forEach(function (v, i) {
        v.isTouchMove = false
        //滑动超过30度角 return
        if (Math.abs(angle) > 30) { 
          return;
        }

        if (i == index) {
          if (touchMoveX > startX) { //右滑
            v.isTouchMove = false
          } else {//左滑
            v.isTouchMove = true
          }
        }
      })
      //更新数据
      that.setData({
        items: that.data.items
      })
    },
    //删除事件
    onItemDel: function (e) {
      this.triggerEvent('del', {itemId: e.currentTarget.dataset.itemid});
    },
    onItemChecked: function(e) {
      this.triggerEvent('checked', {itemId: e.currentTarget.dataset.itemid});
    },
    onMinusCount: function(e) {
      this.triggerEvent('dec', {itemId: e.currentTarget.dataset.itemid});
    },
    onAddCount: function(e) {
      this.triggerEvent('inc', {itemId: e.currentTarget.dataset.itemid});
    },
    onChecked: function(e) {
      this.triggerEvent('checked', {itemId: e.currentTarget.dataset.itemid});
    }
  }
})
