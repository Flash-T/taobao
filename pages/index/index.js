const api = getApp().globalData.api

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '目前没有信息',
    statusbar: wx.getStorageSync('statusBarHeight')+44,
    menu_list: [
      {
        img: "//gw.alicdn.com/imgextra/i2/O1CN01qrrUAN1wRjrhtfk6Q_!!6000000006305-2-tps-183-144.png_q90.jpg_.webp",
        txt: "淘票票"
      },
      {
        img: "//gw.alicdn.com/imgextra/i3/O1CN01ULqxIg1sMvM4cBneE_!!6000000005753-2-tps-183-144.png_q90.jpg_.webp",
        txt: "飞猪旅行"
      },
      {
        img: "//gw.alicdn.com/imgextra/i1/O1CN01ExCBy027VMvYQPjuN_!!6000000007802-2-tps-183-144.png_q90.jpg_.webp",
        txt: "连连消"
      },
      {
        img: "//gw.alicdn.com/tfs/TB1XRlKOXzqK1RjSZFCXXbbxVXa-183-144.png_q90.jpg_.webp",
        txt: "U先试用"
      },
      {
        img: "//gw.alicdn.com/imgextra/i1/O1CN01Lil7RM1U7JCGBNT1U_!!6000000002470-2-tps-183-144.png_q90.jpg_.webp",
        txt: "聚划算"
      },
      {
        img: "//gw.alicdn.com/imgextra/i4/O1CN01pFtEB01bCWtK2kxcc_!!6000000003429-2-tps-183-144.png_q90.jpg_.webp",
        txt: "小黑盒"
      },
      {
        img: "//gw.alicdn.com/imgextra/i2/O1CN01ZOR1cv1yjGFORGh1V_!!6000000006614-2-tps-183-144.png_q90.jpg_.webp",
        txt: "阿里拍卖"
      },
      {
        img: "//gw.alicdn.com/imgextra/i2/O1CN01fV2JYQ1CzCaMFAxwK_!!6000000000151-2-tps-183-144.png_q90.jpg_.webp",
        txt: "斗地主"
      },
      {
        img: "//gw.alicdn.com/imgextra/i3/O1CN012qB5SI1X5QJZt2Qsv_!!6000000002872-2-tps-183-144.png_q90.jpg_.webp",
        txt: "极有家"
      },
      {
        img: "//gw.alicdn.com/imgextra/i1/O1CN01Iqydmq1tOaWhDcEog_!!6000000005892-2-tps-183-144.png_q90.jpg_.webp",
        txt: "淘工厂"
      },
      {
        img: "//gw.alicdn.com/imgextra/i4/O1CN01zcidKY1YiBfJwtfpO_!!6000000003092-2-tps-183-144.png_q90.jpg_.webp",
        txt: "国家补贴"
      },
      
    ],
    card_list:[
      {
        img:"//img.alicdn.com/imgextra/i3/2215302257/O1CN01xBewJa1DhsMVRWmY0_!!2215302257.jpg_500x500q90.jpg",
        info:"520情人节礼物Patchi迪拜芭驰巧克力黑巧礼盒进口",
        price: 235,
        buy:"600+人已买"
      },
      {
        img:"//img.alicdn.com/imgextra/i1/2215302257/O1CN01ZGDhpC1DhsMeXOKbA_!!2215302257.jpg_500x500q90.jpg",
        info:"Lindt瑞士莲官方正品软心牛奶黑巧克力200g零食",
        price: 89,
        buy:"200+人已买"
      },
      {
        img:"//img.alicdn.com/imgextra/i4/2215302257/O1CN01sfREPE1DhsMa2L1m3_!!2215302257.jpg_500x500q90.jpg",
        info:"ROYCE若翼族日本北海道生巧克力高端进口零食生日",
        price: 117.55,
        buy:"200+人已买"
      },
      {
        img:"//img.alicdn.com/imgextra/i2/2215302257/O1CN01wPXjdh1DhsMUhoY9E_!!2215302257.jpg_500x500q90.jpg",
        info:"德国进口瑞特兹Ritter Sport牛奶草莓果仁",
        price: 51.87,
        buy:"700+人已买"
      },
      {
        img:"//img.alicdn.com/imgextra/i3/2215302257/O1CN01FfXGKN1DhsMZRfV8T_!!2215302257.jpg_500x500q90.jpg",
        info:"明治雪吻巧克力75g",
        price: 39.9,
        buy:"500+人已买"
      },
      {
        img:"//img.alicdn.com/imgextra/i1/2215302257/O1CN01sK6DP71DhsMbjxnuh_!!2215302257.jpg_500x500q90.jpg",
        info:"比利时进口歌帝梵Godiva巧克力礼盒装",
        price: 199,
        buy:"300+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i1/857093887/O1CN01pLhD9h1eaIAlKGZvR_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        info:"a4彩纸彩色复印纸a4/80克打印复印纸手工70克彩色纸粉红大红浅蓝浅绿金黄色500张装安兴汇东A4彩纸复印彩胶纸",
        price: 19.8,
        buy:"1000+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i2/1085315961/O1CN01aj1hej1tuBw0qz4Uu_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        info:"Razer雷蛇重装甲虫V3电竞电脑游戏加大鼠标布垫原神EDG战队款桌垫",
        price: 219,
        buy:"300+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i1/1691338970/O1CN01TrceHp2G8JjxCni8H_!!4611686018427381978-0-item_pic.jpg_500x500q90.jpg_.webp",
        info:"3M思高大号平板拖把家用一拖净拖地神器干湿两用拖布木地板铝合金",
        price: 39.9,
        buy:"600+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i2/139443141/O1CN01TBDrhX1Z4d1EwytBU_!!139443141.jpg_500x500q90.jpg_.webp",
        info:"临安天目山小香薯新鲜5斤沙地宗红薯黄心山芋地瓜海番薯 榴莲蜜薯",
        price: 29,
        buy:"700+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i3/381413211/O1CN019yzfSR1ZagVLkoAzA_!!381413211.jpg_500x500q90.jpg_.webp",
        info:"台式机E5 CPU散热器1366/2011/2066服务器X58静音铜芯X79双路X99",
        price: 23.9,
        buy:"100+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i2/1774931924/O1CN011qIlRd1Q5EtGfMqhp_!!1774931924.jpg_500x500q90.jpg_.webp",
        info:"收银纸80X50热敏纸8050厨房80mm 收银机客如云打印纸小票机小卷纸",
        price: 64,
        buy:"500+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i4/911755888/O1CN01nLSCoG1tMl2mMxzM5_!!911755888.png_500x500q90.jpg_.webp",
        info:"【玉版三炉纸】古法手工半生熟皮纸-仿古传统山水花鸟-汪氏三炉纸",
        price: 148,
        buy:"100+人已买"
      },
      {
        img:"//gw.alicdn.com/bao/uploaded/i3/1658398402/O1CN01sFhqPK2BwAYK35qAz_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        info:"防晒帽夏天可折叠太阳帽大头围帽子大檐草帽户外帽子男款遮阳帽",
        price: 29,
        buy:"300+人已买"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* API请求已注释
    let that = this;
    wx.request({
      url: api+'/getobject',
      method: 'GET',
      header:{
        'content-type': 'application/json'
      },
      success(res){
       that.setData({
         msg: res.data
       })
        console.log('hello:', res.data)
      },
      fail(err){
        console.error('请求失败：', err)
      }
    },
    {
      url:api+'/hellos',
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success(res){
       that.setData({
         msg: res.data
       })
        console.log('hellos:', res.data)
      },
      fail(err){
        console.error('请求失败：', err)
      }
    })
    */
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