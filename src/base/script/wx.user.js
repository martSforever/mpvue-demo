import qcloud from 'wafer2-client-sdk';
import config from "../config/config";
import {copy} from "./util";

export function getUser() {
  return new Promise((rs, rj) => {
    let user = {};
    /*首先查看用户是否授权*/
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          /*用户已经授权*/
          user.isAuth = true;
          /*获取用户信息*/
          user.userinfo = wx.getStorageSync('userinfo');
          rs(user);
        } else {
          /*用户没有授权*/
          user.isAuth = false;
          user.userinfo = null;
          rs(user);
        }
      },
    });
  })
}

export function userLogin() {
  return new Promise((rs, rj) => {
    /*检查用户登录是否过期*/
    wx.checkSession({
      async success(req) {
        console.log('已登录...', req);
        rs();
      },
      async fail(req) {
        console.log('已过期，重新登录后台...', req);
        qcloud.clearSession();
        let userInfo = await wxLogin();
        rs(userInfo);
      }
    })
    ;
  })
}

function wxLogin() {
  return new Promise((rs, rj) => {
    qcloud.setLoginUrl(config.loginUrl);
    qcloud.login({
      success(userInfo) {
        let ret = copy(userInfo);
        wx.setStorageSync('userinfo', userInfo);
        rs(ret);
      },
      fail(err) {
        console.error('qcloud.login:fail-->>', err)
        rj(err);
      },
    })
  });
}
