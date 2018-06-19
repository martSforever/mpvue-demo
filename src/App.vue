<script>
  import {get, post} from "./base/script/http";

  export default {
    name: "app",
    async created() {
      let demoData = await post('weapp/demo', {id: '123'});
      console.log('测试请求本地后台数据-->>',demoData);
    },
  }
</script>

<style>

</style>
