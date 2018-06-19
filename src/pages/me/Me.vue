<template>
  <div class="me-page">
    <div class="avatar-wrapper">
      <img :src="userinfo.avatarUrl" class="avatar"/>
      <div v-if="isLogin">{{userinfo.nickName}}</div>
      <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="getUserAuthorization" @click="checkApiAvailable"
              class="login-btn">
        登陆
      </button>
      <button @click="scanBook" class="scan-btn" v-if="isLogin">添加图书</button>
    </div>
  </div>
</template>

<script>
  import {getUser, userLogin} from "../../base/script/wx.user";
  import {hideLoading, showLoading, showToast} from "../../base/script/msg";

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
          console.log('用户已经登录！openId:' + this.userinfo.openId);
        } else console.log('用户未登录！');
      },
      async getUserAuthorization(e) {
        console.log('getUserAuthorization');
        showLoading('正在登陆...');
        /*获取用户授权*/
        if (e.mp.detail.rawData) {
          console.log('用户允许授权。');
          console.log('用户信息-->>', e.mp.detail);
          let userinfo = await userLogin();
          console.log(userinfo);
          this.initializedUser();
          hideLoading();
          showToast('登陆成功！');
        } else {
          console.log('用户拒绝授权...')
        }
      },
      async checkApiAvailable() {
        /*检查用户微信版本是否兼容当前获取用户信息的api，不兼容的话，提示用户更新小程序*/
        if (!wx.canIUse('button.open-type.getUserInfo')) console.log('请升级微信版本')
      },
      async scanBook() {
        console.log('添加图书');
        wx.scanCode({
          success(res) {
            console.log(res);
          },
        })
      },
    }
  }
</script>

<style lang="scss">
  /*@formatter:off*/
  .me-page{
    .avatar-wrapper{
      padding-top: 12rpx;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .avatar {
        width: 120rpx;
        height: 120rpx;
        border-radius: 120rpx;
      }
      .login-btn{
        font-size: 24rpx;
        border-radius: 0;
        background-color: #39B548;
        color: white;
        border: none;
      }
      .scan-btn{
        font-size: 24rpx;
        border-radius: 12rpx;
        background-color: #EA5149;
        color: white;
        border: none;
      }
    }
  }

  /*@formatter:on*/
</style>
