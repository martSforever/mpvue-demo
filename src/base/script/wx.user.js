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
          wx.getUserInfo({
            success(res) {
              user.userinfo = res.userInfo;
              rs(user);
            },
          });
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
