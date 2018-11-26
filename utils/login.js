import { wajax } from './wajax'
import {
  net,
  authorize
} from './msg'
import { toastNone } from './Toast'

class loginObject {
  constructor() {
    this.toStart = null
    return new Promise((resolve, reject) => {
      try {
        this.resolve = resolve;
        this.reject = reject;
        this.toStart = this.loginList();
        this.toStart.next();
      } catch(err) {
        console.error(err);
        reject();
      }
    })
  }

  // 调用接口获取登录凭证code
  getCode() {
    wx.login({
      success: res => {
        console.log(res.code)
        this.toStart.next(res.code)
      },
      fail: () => {
        toastNone(net.reqFail)
        this.reject(net.reqFail)
      }
    })
  }

  // 请求服务器换取用户信息 openid unionid
  getUserid(code) {
    wajax({
      url: '/v/code2Session/index',
      params: { code },
      method: 'POST',
    }).then(res => {
      if (res.status === 200) {
        console.log(res);
      } else {
        this.reject(res)
      }
    }).catch(err => {
      console.log('console.log(err);', err);
      this.reject(net.reqFail)
    })
  }

  // 登录处理函数列表
  loginList() {
    return {
      num: -1,
      funcList: [
        // 获取code
        () => this.getCode(),
        (...a) => this.getUserid(...a)
      ],
      next(...a) {
        const nextRun = this.funcList[++this.num]
        return nextRun && nextRun(...a)
      }
    }
  }
}

export default loginObject;

// loginStart(reject) {
//   wx.authorize({
//     scope: 'scope.userInfo',
//     success: () => {
//       this.toStart.next();
//     },
//     fail() {
//       toastNone(authorize.fail);
//       // 授权失败 跳转登录页面
//       wx.reLaunch({
//         url: '/pages/login/index'
//       });
//       reject('scope.userInfo: false');
//     }
//   })
// }