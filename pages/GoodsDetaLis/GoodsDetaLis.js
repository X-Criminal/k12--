// pages/GoodsDetaLis/GoodsDetaLis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:[
      { image: "http://k12education.com.cn/Web/images/logo.png"},
      { image: "http://k12education.com.cn/Web/images/logo.png" },
      { image: "http://k12education.com.cn/Web/images/logo.png" },
      { image: "http://k12education.com.cn/Web/images/logo.png" },
    ],
    userAppraices:[
      {
        a:'http://k12education.com.cn/Web/images/logo.png',
        b:"小明",
        c:false,
        d:3,
        e:"买了两次，感觉好用买了两次，感觉好用买了两次，感觉好用买了两次，感觉好用买了两次，感觉好用买了两次，感觉好用",
        f:"10-22 18:19"
      }
    ],
    current:1
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

  },
  SwiperChange(e){
    this.setData({
      current: e.detail.current+1
    })
  },
  xiaoming1(){
    wx.switchTab({
      url: '../index/index',
      fail(e){
        console.log(e)
      }
    })
  },
  xiaoming2(){
    wx.showToast({
      title:'暂时没有客服'
    })
  },
  xiaoming3() {
    wx.switchTab({
      url: '../sopping/sopping'
    })
  },
  xiaoming4(){
    wx.showToast({
      title: '加入购物车'
    })
  },
  xiaoming5() {
    wx.showToast({
      title: '暂时无法付款'
    })
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

  }
})