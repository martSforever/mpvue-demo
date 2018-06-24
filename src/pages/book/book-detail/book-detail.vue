<template>
  <div>
    <book-info :book="book"/>
    <div class="comment-wrapper">
      <div class="other">
        <div class="location">
          <span>地理位置：</span>
          <switch color="#EA5A49" @change="getGeolocation"></switch>
          <div>{{location}}</div>
        </div>
        <div class="phone">
          <span>手机型号：</span>
          <switch color="#EA5A49" @change="getPhoneType"></switch>
          {{phoneType}}
        </div>
      </div>
      <textarea v-model="comment" :maxlength="100" placeholder="请输入图书短评..." class="comment"></textarea>
      <div>
        <button class="submit-comment-btn" @click="addComment">提交评论</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {get, post} from "../../../base/script/http";
  import BookInfo from "../../../base/components/BookInfo/book-info";
  import {getLocation} from "../../../base/script/location";
  import {showModal} from "../../../base/script/msg";

  export default {
    components: {BookInfo},
    name: "book-detail",
    data() {
      return {
        book: {id: '110'},
        comment: '',
        location: '',
        phoneType: '',
        userinfo: {},
      }
    },
    mounted() {
      console.log('currentPageData', this.$nav.currentPageData);

      this.book.id = this.$root.$mp.query.id;
      this.getDetail();
      const userinfo = wx.getStorageSync('userinfo');
      if (userinfo) {
        this.userinfo = userinfo;
      }
    },
    methods: {
      async getDetail() {
        this.book = await post('weapp/book/addCount', {id: this.book.id});
        !!this.book.title && wx.setNavigationBarTitle({title: this.book.title});
      },
      async getGeolocation(e) {
        if (e.target.value) {
          this.location = await getLocation();
        } else {
          this.location = '';
        }
      },
      async getPhoneType(e) {
        this.phoneType = !e.target.value ? '' : wx.getSystemInfoSync().model;
      },
      async addComment(e) {

        if (!this.comment) {
          showModal("请输入评论内容！");
          return;
        }

        let comment = {
          comment: this.comment,
          phoneType: this.phoneType,
          location: this.location,
          bookId: this.book.id,
          userId: this.userinfo.openId,
        }
        console.log(comment);

        let ret = await post('weapp/comment/insert', comment);
        console.log(ret);
        if (ret) {
          showModal('评论提交成功');
          this.comment = '';
        }
      },
    },
    onUnload(){
        console.log('book detail onUnload');
    },
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .comment-wrapper{
    .comment{
      width: 730rpx;
      background-color: #eee;
      padding: 10rpx;
      font-size: 16px;
    }
    .other{
      font-size: 16px;
      padding: 10rpx;
      div{
        display: block;
      }
      .location,.phone{
        margin-bottom: 12rpx;
      }
    }
    .submit-comment-btn{
      background-color: #EA5149;
      &:active{
        background-color: rgba(#EA5149,0.5);
      }
      color: white;
    }
  }
  /*@formatter:on*/
</style>
