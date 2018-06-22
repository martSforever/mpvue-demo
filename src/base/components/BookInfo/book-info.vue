<template>
  <div class="book-info">
    <div class="image-wrapper">
      <img :src="book.image" class="bg" mode="aspectFill">
      <div class="front-cover">
        <img :src="book.image" class="image" mode="aspectFit">
        <div class="info">
          <div class="title">{{book.title}}</div>
          <div class="authors">{{book.authors}}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="!!book.userInfo" class="owner">
        <img :src="book.userInfo.avatarUrl" class="avatar">
        <span>{{book.userInfo.nickName}}</span>
      </div>
      <div>
        <rate :value="book.rate"></rate>
      </div>
    </div>
    <div class="row">
      <div class="publisher">{{book.publisher}}</div>
      <div class="price">{{book.price}}</div>
    </div>
    <div class="row" v-if="book.tags">
      <div class="tags-wrapper">
        <span v-for="(tag,index) in book.tags" :key="index" class="tag">
          {{tag}}
        </span>
      </div>
    </div>
    <div class="row">
      <div class="summary-wrapper" v-if="book.summary">
        <span v-for="(summary,index) in book.summary" :key="index" class="summary">
          {{summary}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Rate from "../Rate/Rate";

  export default {
    components: {Rate},
    name: "book-info",
    props: {
      book: {}
    },
    mounted() {
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .book-info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 12px;
    .image-wrapper{
      height: 500rpx;
      width: 100%;
      overflow: hidden;
      position: relative;
      .bg{
        width: 100%;
        height: 500rpx;
        filter: blur(15px);
      }
      .front-cover{
        width: 100%;
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .image{
          width: 100%;
          height: 300rpx;
        }
        .info{
          margin-top: 15rpx;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .title{
            font-size: 20px;
          }
          .authors{
            max-width: 500rpx;
            font-size: 14px;
          }
        }
      }
    }
    .row{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 24rpx;
      font-size: 14px;
      margin-top: 24rpx;
      div{
        display: block;
      }
      .price{
        text-align: right;
      }
      .tags-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .tag{
          padding: 6rpx 12rpx;
          border-radius: 12rpx;
          color: #EA5149;
          font-size: 12px;
          border: solid 1px #EA5149;
          margin-right: 6rpx;
          margin-bottom: 6rpx;
        }
      }
      .summary-wrapper{
        .summary{
          text-indent: 2em;
          display: block;
        }
      }

    }
    .owner{
      display: flex;
      flex-direction: row;
      align-items: center;
     .avatar{
        width: 24px;
        height: 24px;
        border-radius: 24px;
        margin-right: 24rpx;
      }
    }
  }
  /*@formatter:on*/
</style>
