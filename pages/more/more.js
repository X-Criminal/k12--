// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBox:false,
    _sort:1, //1综合排序  2降序 3升序,
    isBox2:true,
    leftSchange:0,
    tap1Idx:1,
    tap2Idx:1,
    number1:"",
    number2:"",
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
  deleBox(){
    this.setData({
      isBox:false,
    })
  },
  z(){
    //综合
  },
  p() {
    //评论
  },
  tap1(e){
    this.setData({
      tap1Idx: e.currentTarget.dataset.idx
    })
  },
  tap2(e) {
    this.setData({
      tap2Idx: e.currentTarget.dataset.idx
    })
  },
  getCheck(){
    this.setData({
      isBox: true,
    })
  },
  sort(){
    switch (this.data._sort){
      case 1:
        this.setData({
          _sort:2
        })
      break;
      case 2:
        this.setData({
          _sort: 3
        })
      break;
      case 3:
        this.setData({
          _sort: 1
        })
      break;
    }
  },
  getClass(){
    this.setData({
      isBox2:true
    })
  },
  deleBox2(){
    this.setData({
      isBox2: false
    })
  },
  getInput(e){
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
  },
  reset(){
    this.setData({
      tap1Idx: 1,
      tap2Idx: 1,
      number1: "",
      number2: "",
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  getDoods(){
    //输入完成点击
    
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
})