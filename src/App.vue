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

  .load-loop{
    animation: ani-load-loop 3s linear infinite;
  }

  @keyframes ani-load-loop {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  /*@formatter:on*/
</style>
