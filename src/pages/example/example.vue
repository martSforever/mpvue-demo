<template>
  <div class="example-wrapper">
    <div class="title">功能示例</div>
    <div class="example-item-wrapper"
         v-for="(example,index) in exmaples"
         :key="index"
         @click="showDetail(example)"
    >
      <div class="example-item">{{example.title}}</div>
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
          {title: '网络请求', url: '/pages/example/http-example/main'},
          {title: '列表自动查询', url: '/pages/example/datalist-mixin-example/main'},
          {title: '开关按钮', url: '/pages/example/lnk-switch-example/main'},
          {title: '上下tabbar', url: '/pages/example/tabbar-example/tab-main/main'},
          {title: '样式绑定', url: '/pages/example/css-example/main'},
          {title: '弹出框实现示例', url: '/pages/example/popover-example/main'},
          {title: '阿里巴巴icon', url: '/pages/example/dp-icon-example/main'},
          {title: '横向滚动', url: '/pages/example/horizontal-scroll/main'},

        ]
      }
    },
    methods: {
      showDetail(example) {
        console.log(JSON.stringify(example))
        this.$nav.goto(example.url, example);
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
