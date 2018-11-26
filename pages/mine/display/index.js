// pages/mine/receiver/receiver.js
import DrawMyDoc from './drawmydoc.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: {},
  },

  // 编辑按钮跳转
  compileBtnTo() {
    wx.navigateTo({
      url: '../toedit/index'
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
    // 绘制页面
    new DrawMyDoc(wx.createCanvasContext('mydoc'), this.options);
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
    return {
      path: `pages/receiver/index/index?userid=${123}`
    }
  }
})
