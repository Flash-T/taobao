// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalItems: 110,
    totalPrice: 0,
    selectedItems: 0,
    selectAll: false,
    cartItems: [
      {
        id: 1,
        shopName: 'royce若翼族旗舰店',
        shopIcon: '//gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_110x10Q75.jpg_.webp',
        title: '爆款生巧Royce日本北海道伴手礼',
        image: '//img.alicdn.com/bao/uploaded/i3/2200608496192/O1CN01qwYRpI22LFxw2rGGf_!!2200608496192.jpg_80x80.jpg',
        specs: '原味牛奶味125g*1盒',
        price: 129,
        quantity: 1,
        selected: false
      },
      {
        id: 2,
        shopName: '女王1号店铺',
        shopIcon: '//gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_110x10Q75.jpg_.webp',
        title: '高级简约保温保冷304不锈钢',
        image: '//img.alicdn.com/bao/uploaded/i4/O1CN01tOZ60Z1w9gTwsJG88_!!684867333.jpg_80x80.jpg',
        specs: '白色360ml',
        price: 27.5,
        quantity: 1,
        selected: false,
        coupon: true
      },
      {
        id: 3,
        shopName: 'ringpu家居旗舰店',
        shopIcon: '//gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_110x10Q75.jpg_.webp',
        title: '定制304不锈钢吊环迷你保温杯',
        image: '//img.alicdn.com/bao/uploaded/i2/2201469788166/O1CN01zHrGla1PJsFPTJ32a_!!0-item_pic.jpg_80x80.jpg',
        specs: '280ml耐磨磨砂白色吊环保温杯（女）',
        price: 29.9,
        quantity: 1,
        selected: false,
        coupon: true
      },
      {
        id: 4,
        shopName: '卫来家旗舰店',
        shopIcon: '//gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_110x10Q75.jpg_.webp',
        title: '不锈钢保温杯高颜值迷你随行保冷',
        image: '//img.alicdn.com/bao/uploaded/i4/2208971020372/O1CN019TwuuC1IoUwv24mRl_!!2208971020372.jpg_80x80.jpg',
        specs: '烈焰红小熊300ml【升级款304加厚不锈钢内胆更保温】',
        price: 30.9,
        quantity: 1,
        selected: false,
        coupon: true
      },
      {
        id: 5,
        shopName: 'CUP PLUS',
        shopIcon: '//gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_110x10Q75.jpg_.webp',
        title: '新款可爱胖墩316不锈钢保温杯',
        image: '//img.alicdn.com/bao/uploaded/i2/2200608496192/O1CN01BJrVkI22LFxpwFGXC_!!2200608496192.jpg_80x80.jpg',
        specs: '橙色 580ml',
        price: 49.9,
        quantity: 1,
        selected: false
      }
    ]
  },

  /**
   * 计算总价和已选商品数
   */
  calculateTotal() {
    let totalPrice = 0;
    let selectedItems = 0;
    
    this.data.cartItems.forEach(item => {
      if (item.selected) {
        totalPrice += item.price * item.quantity;
        selectedItems += 1;
      }
    });
    
    this.setData({
      totalPrice: totalPrice.toFixed(1),
      selectedItems: selectedItems
    });
  },

  /**
   * 切换单个商品选中状态
   */
  toggleSelect(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });
    
    // 检查是否全选
    const allSelected = cartItems.every(item => item.selected);
    
    this.setData({
      cartItems: cartItems,
      selectAll: allSelected
    });
    
    this.calculateTotal();
  },

  /**
   * 切换全选状态
   */
  toggleSelectAll() {
    const selectAll = !this.data.selectAll;
    const cartItems = this.data.cartItems.map(item => {
      item.selected = selectAll;
      return item;
    });
    
    this.setData({
      selectAll: selectAll,
      cartItems: cartItems
    });
    
    this.calculateTotal();
  },

  /**
   * 增加商品数量
   */
  increaseQuantity(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id && item.quantity < 99) {
        item.quantity += 1;
      }
      return item;
    });
    
    this.setData({
      cartItems: cartItems
    });
    
    this.calculateTotal();
  },

  /**
   * 减少商品数量
   */
  decreaseQuantity(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    
    this.setData({
      cartItems: cartItems
    });
    
    this.calculateTotal();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.calculateTotal();
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
    // 如果有从其他页面返回的情况，可以重新计算总价
    this.calculateTotal();
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