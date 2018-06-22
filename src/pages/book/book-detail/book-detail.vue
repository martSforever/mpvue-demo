<template>
  <div>
    <book-info :book="book"/>
    <div class="comment-wrapper">
      <div class="other">
        <div class="location">
          <span>地理位置：{{locationStr}}</span>
          <switch color="#EA5A49" @change="getGeolocation"></switch>
        </div>
        <div class="phone">
          <span>手机型号：{{phoneType}}</span>
          <switch color="#EA5A49" @change="getPhoneType"></switch>
        </div>
      </div>
      <textarea v-model="comment" :maxlength="100" placeholder="请输入图书短评..." class="comment"></textarea>
    </div>
  </div>
</template>

<script>
  import {get, post} from "../../../base/script/http";
  import BookInfo from "../../../base/components/BookInfo/book-info";

  export default {
    components: {BookInfo},
    name: "book-detail",
    data() {
      return {
        book: {id: '110'},
        comment: '',
        location: '',
        phoneType: '',
      }
    },
    computed: {
      locationStr() {
        return JSON.stringify(this.location)
      },
    },
    mounted() {
      this.book.id = this.$root.$mp.query.id;
      this.getDetail();
    },
    methods: {
      async getDetail() {
        this.book = await post('weapp/book/addCount', {id: this.book.id});
        !!this.book.title && wx.setNavigationBarTitle({title: this.book.title});
      },
      async getGeolocation(e) {
        if (e.target.value) {
          wx.getLocation({
            success: geo => {
              console.log(geo);
              let {latitude, longitude} = geo;
              this.location = {
                latitude,
                longitude
              }
            }
          })
        } else {
          this.location = '';
        }
      },
      async getPhoneType(e) {
        this.phoneType = !e.target.value ? '' : wx.getSystemInfoSync().model;
      },
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 14px;
    }
  }
  /*@formatter:on*/
</style>
