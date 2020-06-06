// components/floating-cart/floating-cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 触控事件
    handleTap(e) {
      this.triggerEvent("handleTap")
    }
  }
})
