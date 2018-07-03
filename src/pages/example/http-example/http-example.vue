<template>
  <div>
    <div>
      <button @click="requestGet">发送get请求</button>
      <button @click="requestPost">发送post请求</button>
    </div>
  </div>
</template>

<script>
  import {showModal} from "../../../base/script/msg";
  import {get, post} from "../../../base/script/http";

  export default {
    name: "http-example",
    methods: {
      async requestGet() {
        console.log('111')
        let ret = await get('weapp/demo', {id: 12345})
        showModal(JSON.stringify(ret));
      },
      async requestPost() {
        console.log('222')
        let ret = await post('weapp/demo', {id: 12345})
        showModal(JSON.stringify(ret));
      },
    }
  }
</script>

<style scoped>

</style>
