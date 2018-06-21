<template>
  <div class="card" @click="handleClick">
    <div class="thumb">
      <img :src="book.image" class="image" mode="aspectFit" @click.stop="handleClickImage(book)">
    </div>
    <div class="detail">
      <div class="row"><p>{{book.title}}</p>
        <p>
          <rate :value="book.rate"></rate>
        </p>
      </div>
      <div class="row"><p>{{book.authors}}</p>
        <p>浏览量：{{book.count}}</p></div>
      <div class="row"><p>{{book.publisher}}</p>
        <p>{{book.userinfo.nickName}}</p></div>
    </div>
  </div>
</template>

<script>
  import Rate from "../Rate/Rate";

  export default {
    components: {Rate},
    name: "card",
    props: {
      book: {}
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e);
      },
      handleClickImage(book) {
        this.$emit('clickImage', book);
      },
    }
  }
</script>

<style lang="scss">
  /*@formatter:off*/
  .card{
    padding: 10rpx;
    overflow: hidden;
    margin-top: 10rpx;
    margin-bottom: 10rpx;
    display: flex;
    flex-direction: row;
    .thumb{
      width: 180rpx;
      height:  180rpx;
      order: 1;
      text-align: left;
      .image{
        max-height: 180rpx;
        max-width: 180rpx;
      }
    }
    .detail{
      order: 2;
      flex: 1;
      margin-left: 24rpx;
      display: flex;
      flex-direction: column;
      .row{
        margin-bottom: 12rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 28rpx;
        p{
          max-width: 300rpx;
          display: inline-block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  /*@formatter:on*/
</style>
