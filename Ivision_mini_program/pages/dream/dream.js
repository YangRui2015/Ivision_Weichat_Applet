//index.js
//获取应用实例
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text1:"过程需要一定时间，请耐心等待。。",
    real_show: '../image/dream.jpg',
    show_image: '../image/dream.jpg',
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
          show_image: tempFilePaths[0],
          real_show:tempFilePaths[0]

        })

        // console.log(that.data.show_image)
        wx.showToast({
          icon: "loading",
          title: "玩命生成中...",
          duration: 6500
        }),
        console.log(app.globalData.id)
          wx.uploadFile({
            url: that.data.Server_url + "/dream",
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
              if (res.statusCode != 200) {
                wx.showModal({
                  title: '提示',
                  content: '上传服务器失败！',
                  showCancel: false,
                })
                return;
              }

              console.log(res.data)
              if (res.data.endsWith(".JPG") || res.data.endsWith(".jpg") || res.data.endsWith(".png") || res.data.endsWith(".jpeg")) {
                var FilePath = that.data.Server_url + "/static/" + res.data;  // 更新图片
                let SmallPath = FilePath.replace("_t.jpg", "_s.jpg")
                if (res.statusCode == 200) {
                  console.log(FilePath)
                  that.setData({  //上传成功修改图片列表
                    show_image: FilePath,
                    real_show: SmallPath
                  })
                }
              }
              else {
                wx.showModal({
                  title: '提示',
                  content: res.data,
                  showCancel: false,
                })
              }

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
        // console.log(_this.data.show_image)
        if(_this.data.show_image != "../image/dream.jpg"){
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
        }
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


