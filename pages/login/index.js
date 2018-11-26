// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 
  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
})