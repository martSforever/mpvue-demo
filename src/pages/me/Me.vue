<template>
  <div>
    <div>
      <img :src="userinfo.avatarUrl" class="avatar"/>
      <div v-if="isLogin">{{userinfo.nickName}}</div>
      <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="getUserAuthorization" @click="checkApiAvailable">
        登陆
      </button>
      <div>openId:{{userinfo.openId}}</div>
    </div>
  </div>
</template>

<script>
  import {getUser, userLogin} from "../../base/script/wx.user";
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
      this.initializedUser();
    },
    methods: {
      async initializedUser() {
        let user = await getUser();
        if (user.isAuth) {
          this.isLogin = user.isAuth;
          this.userinfo = user.userinfo;
          console.log('用户已经登录！');
        } else console.log('用户未登录！');
      },
      async getUserAuthorization(e) {
        console.log('getUserAuthorization');
        /*获取用户授权*/
        if (e.mp.detail.rawData) {
          console.log('用户允许授权。');
          console.log('用户信息-->>', e.mp.detail);
          this.initializedUser();
          let userinfo = await userLogin();
          console.log(userinfo);
        } else {
          console.log('用户拒绝授权...')
        }
      },
      async checkApiAvailable() {
        /*检查用户微信版本是否兼容当前获取用户信息的api，不兼容的话，提示用户更新小程序*/
        if (!wx.canIUse('button.open-type.getUserInfo')) console.log('请升级微信版本')
      },

      doLogin() {
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
          success(userInfo) {
            console.log(userInfo);
          },
          fail(err) {
            console.error(err);
          },
        })
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
