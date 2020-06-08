// components/category-scrollbar/category-scrollbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      /**dataList: {
      type: Object,
      value: []
    }*/
  },

  /**
   * 组件的初始数据 
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    dataList: [
      [{"id": "1001", "title": "水果馆", "icon": "../../static/images/category/fruit.png"},
      {"id": "1002", "title": "蔬菜馆", "icon": "../../static/images/category/vegetables.png"},
      {"id": "1003", "title": "肉肉馆", "icon": "../../static/images/category/meat.png"},
      {"id": "1004", "title": "家禽馆", "icon": "../../static/images/category/roast_chicken.png"},
      {"id": "1005", "title": "水产馆", "icon": "../../static/images/category/fish.png"},
      {"id": "1006", "title": "蛋蛋馆", "icon": "../../static/images/category/egg.png"},
      {"id": "1007", "title": "豆腐馆", "icon": "../../static/images/category/tofu.png"},
      {"id": "1008", "title": "生鲜批发", "icon": "../../static/images/category/lobster.png"},
      {"id": "1009", "title": "5折起抢", "icon": "../../static/images/category/discount.png"},
      {"id": "1010", "title": "夏天来了", "icon": "../../static/images/category/summer.png"}
    ],
    [{"id": "1011", "title": "家庭批发", "icon": "../../static/images/category/home.png"},
      {"id": "1012", "title": "牛奶馆", "icon": "../../static/images/category/milk.png"},
      {"id": "1013", "title": "烘焙馆", "icon": "../../static/images/category/bread.png"},
      {"id": "1014", "title": "农副馆", "icon": "../../static/images/category/peanut.png"},
      {"id": "1015", "title": "休闲零食", "icon": "../../static/images/category/snake.png"},
      {"id": "1016", "title": "酒水乳饮", "icon": "../../static/images/category/liquor.png"},
      {"id": "1017", "title": "粮油调味", "icon": "../../static/images/category/rice.png"},
      {"id": "1018", "title": "餐食料理", "icon": "../../static/images/category/baozi.png"},
      {"id": "1019", "title": "家具家清", "icon": "../../static/images/category/washing.png"},
      {"id": "1020", "title": "服饰穿戴", "icon": "../../static/images/category/hat.png"}
  ],
      [{"id": "1021", "title": "美容个护", "icon": "../../static/images/category/toothpaste.png"},
      {"id": "1022", "title": "母婴文体", "icon": "../../static/images/category/baby.png"},
      {"id": "1023", "title": "绿植花卉", "icon": "../../static/images/category/flower.png"},
      {"id": "1024", "title": "家电数码", "icon": "../../static/images/category/phone.png"}
      ]
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      
  }
})
