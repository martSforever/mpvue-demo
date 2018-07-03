<template>
  <div class="example-wrapper">
    <div class="title">功能示例</div>
    <div class="example-item-wrapper"
         v-for="(exmaple,index) in exmaples"
         :key="index"
         @click="showDetail(exmaple)"
    >
      <div class="example-item">{{exmaple.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "example",
    data() {
      return {
        exmaples: [
          {title: '蜗牛图书', url: '/pages/book/book-list/main'},
          {title: '消息提示', url: '/pages/example/msg/main'},
          {title: '导航', url: '/pages/example/nav/nav-list/main'},
          {title: '开关按钮', url: '/pages/example/lnk-switch-example/main'},
        ]
      }
    },
    methods: {
      showDetail(exmaple) {
        this.$nav.goto(exmaple.url, exmaple);
      },
    }
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .example-wrapper{
    .title{
      width: 100%;
      height: 128rpx;
      font-size: 48rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .example-item-wrapper{
        display: flex;
        align-items: center;
        height: 96rpx;
        padding: 0 24rpx;
        .example-item{
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          border-bottom: solid 1rpx #ddd;
        }
      }
    }
  /*@formatter:on*/
</style>
