
const ajaxheaders = {
  'content-type': 'application/json'
}

// ajax
function networkajax({url, headers, params, method}) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url,
      header: headers || ajaxheaders,
      data,
      method,
      success (res) {
        //返回结果自行处理
        // console.log('返回结果：')
        // console.log(res.data)
        // app.netWorkData.result = res.data
        resolve(res);
      },
      fail (err) {
        resolve(err);
      }
    })
  })
}

module.exports = {
  wxajax: networkajax
}
