<template>
  <div>
    <div>
      <img :src="userinfo.avatarUrl" class="avatar"/>
      <div v-if="isLogin">{{userinfo.nickName}}</div>
      <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="getUserAuthorization" @click="checkApiAvailable">
        登陆
      </button>
    </div>
  </div>
</template>

<script>
  import {getUser} from "../../base/script/wx.user";
  import config from "../../base/config/config";
  import qcloud from 'wafer2-client-sdk';

  export default {
    name: "me",
    data() {
      return {
        isLogin: false,
        userinfo: {
          avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png'
        },
      }
    },
    mounted() {
      // 一进来看看用户是否授权过
      this.initialized()
    },
    methods: {
      async initialized() {
        let user = await getUser();
        if (user.isAuth) {
          this.isLogin = user.isAuth;
          this.userinfo = user.userinfo;
        }
      },
      async getUserAuthorization(e) {
        /*获取用户授权*/
        if (e.mp.detail.rawData) {
          console.log('用户允许授权。');
          console.log('用户信息-->>', e.mp.detail.rowData);
          this.initialized();
        } else {
          console.log('用户拒绝授权...')
        }
      },
      async checkApiAvailable() {
        /*检查用户微信版本是否兼容当前获取用户信息的api，不兼容的话，提示用户更新小程序*/
        if (!wx.canIUse('button.open-type.getUserInfo')) console.log('请升级微信版本')
      },

      doLogin() {
        console.log('doLogin');
        const session = qcloud.Session.get()
        if (session) {
          // 第二次登录
          // 或者本地已经有登录态
          // 可使用本函数更新登录态
          qcloud.loginWithCode({
            success: res => {
              console.log('code-->>', 1);
              this.isLogin = true;
              this.userinfo = res;
              console.log('登录成功')
            },
            fail: err => {
              console.log('code-->>', 2);
              console.error(err)
            }
          })
        } else {
          // 首次登录
          qcloud.setLoginUrl(config.loginUrl);
          qcloud.login({
            success: res => {
              console.log('code-->>', 3);
              this.isLogin = true;
              this.userinfo = res;
              console.log('登录成功')
            },
            fail: err => {
              console.log('code-->>', 4);
              console.error(err)
            }
          })
        }
      },
    }
  }
</script>

<style>
  /*@formatter:off*/
  .avatar {
    width: 375rpx;
    height: 375rpx;
  }
  /*@formatter:on*/
</style>
