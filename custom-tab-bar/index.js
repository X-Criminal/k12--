Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    left:"",
    top:"",
    list: [{
      pagePath: "../index/index",
      iconPath: "/image/home.jpg",
      selectedIconPath: "/image/home1.jpg",
      text: "首页"
    }, {
      pagePath: "../class/class",
      iconPath: "/image/class.jpg",
      selectedIconPath: "/image/class2.jpg",
      text: "分类"
    },
    {
      pagePath: "../sopping/sopping",
      pagePath2: "../sopping/sopping2",
      iconPath: "/image/sopping.jpg",
      selectedIconPath: "/image/sopping2.jpg",
      text: "购物车",
      badge:""
    },
    {
      pagePath: "../class/class",
      iconPath: "/image/my.jpg",
      selectedIconPath: "/image/my.jpg",
      text: "我的"
    }]
  },
  left:"",
  attached() {
    this.queryDom();
    this.addSopping();
    this._setStorage();
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      // if(url.indexOf("sopping")>-1){
      //  let sopping =  wx.getStorageSync("sopping")||[];
      //  if(sopping.length <= 0){
      //    wx.switchTab({ url });
      //  }else{
      //    const url = data.path2;
      //    wx.switchTab({ url });
      //  }
      //  return false;
      // }
      wx.switchTab({ url });
    },
    queryDom() {
        const query = wx.createSelectorQuery().in(this);
        query.select('#tab-bar-item2image').boundingClientRect((res) => {
          this.setData({
            left: res.left,
            top: res.top,
          })
        }).exec()
    },
    _setStorage(){
      let Lis = this.data.list;
      wx.setStorageSync("TarBarlis", Lis)
    },
    addSopping() {
      let TarBar =  wx.getStorageSync("TarBarlis")||this.data.list;
      this.setData({
        list: TarBar
      })
    },
  },
  // lifetimes:{
  //   attached(){
     
  //   }
  // },
})