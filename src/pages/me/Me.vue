<template>
  <div class="me-page">
    <div class="avatar-wrapper">
      <img :src="userinfo.avatarUrl" class="avatar"/>
      <div v-if="isLogin">{{userinfo.nickName}}</div>
      <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="getUserAuthorization" @click="checkApiAvailable"
              class="login-btn">
        点击登陆
      </button>
      <year-progress/>
      <button @click="scanBook" class="scan-btn" v-if="isLogin">添加图书</button>
    </div>
  </div>
</template>

<script>
  import {getUser, userLogin} from "../../base/script/wx.user";
  import {hideLoading, showLoading, showModal, showToast} from "../../base/script/msg";
  import YearProgress from "../../base/components/YearProgress/year-progress";
  import {get, post} from "../../base/script/http";

  export default {
    components: {YearProgress},
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
          showToast('登陆成功！');
        } else {
          console.log('用户拒绝授权...')
        }
        hideLoading();
      },
      async checkApiAvailable() {
        /*检查用户微信版本是否兼容当前获取用户信息的api，不兼容的话，提示用户更新小程序*/
        if (!wx.canIUse('button.open-type.getUserInfo')) console.log('请升级微信版本')
      },
      async scanBook() {
        wx.scanCode({
          success: (res) => {
            res && (this.addBook(res.result));
          },
        })
      },
      async addBook(isbn) {
        const {data} = await post('weapp/book/addBook', {isbn, openId: this.userinfo.openId})
        showModal(`【${data.title}】添加成功！`);
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
        background-color: transparent;
        color: black;
        border: none;
        margin-bottom: 24rpx;
      }
      .scan-btn{
        font-size: 24rpx;
        background-color: #EA5149;
        border-radius: 0;
        width: 100%;
        color: white;
        border: none;
        margin-top: 12rpx;
      }
    }
  }

  /*@formatter:on*/
</style>
