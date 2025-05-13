// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickname: 'TpOMG',
      avatar: '/static/avatar.png',
      accountName: 'tb17029482'
    },
    recommendProducts: [
      {
        id: 1,
        name: '520情人节礼物Patchi迪拜芭驰巧克力黑巧礼盒进口',
        price: 235,
        soldCount: '600',
        image: '//img.alicdn.com/imgextra/i3/2215302257/O1CN01xBewJa1DhsMVRWmY0_!!2215302257.jpg_250x250q90.jpg'
      },
      {
        id: 2,
        name: 'Lindt瑞士莲官方正品软心牛奶黑巧克力200g零食',
        price: 89,
        soldCount: '200',
        image: '//img.alicdn.com/imgextra/i1/2215302257/O1CN01ZGDhpC1DhsMeXOKbA_!!2215302257.jpg_250x250q90.jpg'
      },
      {
        id: 3,
        name: 'ROYCE若翼族日本北海道生巧克力高端进口零食生日',
        price: 117.55,
        soldCount: '200',
        image: '//img.alicdn.com/imgextra/i4/2215302257/O1CN01sfREPE1DhsMa2L1m3_!!2215302257.jpg_250x250q90.jpg'
      },
      {
        id: 4,
        name: '德国进口瑞特兹Ritter Sport牛奶草莓果仁',
        price: 51.87,
        soldCount: '700',
        image: '//img.alicdn.com/imgextra/i2/2215302257/O1CN01wPXjdh1DhsMUhoY9E_!!2215302257.jpg_250x250q90.jpg'
      }
    ]
  },

  /**
   * 跳转到设置页面
   */
  goToSettings() {
    wx.showToast({
      title: '功能尚未开放',
      icon: 'none'
    })
  },

  /**
   * 复制账号名称
   */
  copyAccountName() {
    wx.setClipboardData({
      data: this.data.userInfo.accountName,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        })
      }
    })
  },

  /**
   * 查看全部订单
   */
  viewAllOrders() {
    wx.showToast({
      title: '正在开发中',
      icon: 'none'
    })
  },

  /**
   * 查看商品详情
   */
  viewProductDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '商品ID: ' + id,
      icon: 'none'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 模拟获取用户头像
    setTimeout(() => {
      this.setData({
        'userInfo.avatar': 'https://img.alicdn.com/imgextra/i4/O1CN01KtQz4k1PnVTNh0rXn_!!6000000001885-2-tps-100-100.png'
      })
    }, 500)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})