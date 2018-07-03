<script>
  import {get, post} from "./base/script/http";

  export default {
    name: "app",
    async created() {
      let demoData = await post('weapp/demo', {id: '123'});
      console.log('测试请求本地后台数据-->>', demoData);
    },
  }
</script>

<style lang="scss">
  /*@formatter:off*/
  @import "base/libs/iconfont/iconfont.css";

  .text-footer{
    text-align: center;
    font-size: 24rpx;
    display: inline-flex;
    height: 72rpx;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .text-primary{
    color: #EA5149;
  }
  /*@formatter:on*/
</style>
