//index.js
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // imglist: ['../image/logo.png'], 
    imglist: '../image/logo.png',
    earpath: '../image/assess.png',
    dreampath:"../image/dream.png",
    stylepath: "../image/transform.png",
    cartoonpath:"../image/cartoon.png",
    Server_url:app.globalData.Server_url
  },
  /**
   * go to find
   */
  gotodream:function(e){
    wx.navigateTo({
      url: '../dream/dream',
      success:function(res){
        // wx.showToast({
        //   icon: "loading",
        //   title: "正在加载....",
        //   time: 1
        // })
      }
    })
  },

  gotoasse:function(e){
    wx.navigateTo({
      url: '../index/index',
      success: function (res) {
        // wx.showToast({
        //   icon: "loading",
        //   title: "正在加载....",
        //   time: 1
        // })
      }
    })
  },

  gotostyle: function (e) {
    wx.navigateTo({
      url: '../style/style',
      success: function (res) {
        // wx.showToast({
        //   icon: "loading",
        //   title: "正在加载....",
        //   time: 1
        // })
      }
    })
  },

  gotocartoon: function (e) {
    wx.navigateTo({
      url: '../cartoon/cartoon',
      success: function (res) {
        // wx.showToast({
        //   icon: "loading",
        //   title: "正在加载....",
        //   time: 1
        // })
      }
    })
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


