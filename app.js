// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    wx.getSystemInfo({
      success(res){
        console.log("获取手机相关参数 >>> ", res)
        wx.setStorageSync('statusBarHeight', res.statusBarHeight)
      }
    })
  },
  globalData: {
    userInfo: null,
    api:"http://localhost:8888"
  }
})
