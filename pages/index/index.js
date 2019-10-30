//index.js
//获取应用实例
const app = getApp()

Component({
  data: {
    isLogin: false,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    images:[
      '../../image/img/分类页_r2_c2.jpg',
      '../../image/img/分类页_r2_c2.jpg',
      '../../image/img/分类页_r2_c2.jpg',
    ]
  },
  methods:{
    sition(e) {
      this.setData({
        detail: e.detail.current
      })
    },
    more(e){
     wx.navigateTo({
       url: '../more/more',
     })
    },
    _NAV(){
      wx.navigateTo({
        url: '../GoodsDetaLis/GoodsDetaLis',
        fail(e){
          console.log(e)
        }
      })
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&this.getTabBar()) {
        let TarBar = wx.getStorageSync("TarBarlis") || this.data.list;
        this.getTabBar().setData({
          selected: 0,
          list: TarBar
        })
      }
    }
  }
})