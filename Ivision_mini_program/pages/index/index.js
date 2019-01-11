//index.js
//获取应用实例
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text1: "您当前得分是: 0，\n您历史最佳得分为: 0。",
    text2: "本次您的得分超过了 0%的用户！",
    show_image: '../image/logo.png',
    timestart:0,
    timeend:0,
    Server_url:app.globalData.Server_url
  },
  
  /**
   * load图片到sever
   */
  upload: function () {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认1
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '',
          icon: 'loading',
          mask: true,
        })  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        that.setData({
          show_image: tempFilePaths[0]
        })

        // console.log(that.data.show_image)
        wx.showToast({
          icon: "loading",
          title: "正在上传......",
          duration: 1000
        }),
        console.log(app.globalData.id)
          wx.uploadFile({
            url: that.data.Server_url + "/Assessment",
            filePath: that.data.show_image,
            name: 'file',
            header: {
              "Content-Type": "multipart/form-data",
            'user': app.globalData.id,
            },
            formData: {
              'filename': that.data.show_image
            },
            success: function (res) {
              console.log(res);
              if (res.statusCode != 200) {
                wx.showModal({
                  title: '提示',
                  content: '上传服务器失败！',
                  showCancel: false,
                })
                return;
              }

              console.log(res.data)
              let string = res.data.split(' ')
              that.setData({
                text1: "您当前得分是: "+string[0] +
                ", \n您历史最佳得分为: " + string[1] +"。",
                text2: "本次您的得分超过了 " + string[2] + "%的用户！"
              })
              console.log(that.data.text1)
                wx.showModal({
                  title: '提示',
                  content: "分析完成",
                  showCancel: false,
                })
            },
              
            fail: function (e) {
              console.log(e);
              wx.showModal({
                title: '提示',
                content: '上传服务器失败',
                showCancel: false,
                duration: 1000
              })
            },
            complete: function () {
              wx.hideToast();  //隐藏Toast
            }
          })
      }
    })
  },

  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function (e) {
    let that = this;
    
  },


  //预览图像
  show: function (e) {
    var _this = this;
    if(_this.data.show_image != "../image/logo.png")
        // console.log(_this.data.show_image)
          wx.previewImage({
            urls: [_this.data.show_image],
            //这根本就不走
            success: function (res) {
              console.log(res);
            },
            //也根本不走
            fail: function () {
              console.log('fail')
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


