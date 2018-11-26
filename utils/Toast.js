function toastNone(msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    mask: true,
    duration: 2000
  });
}

export {
  toastNone
}
