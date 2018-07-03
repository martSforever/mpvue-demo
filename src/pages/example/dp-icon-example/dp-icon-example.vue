<template>
  <div>
    <span class="iconfont dp-icon-qiehuanqizuo"></span>
    <span class="iconfont dp-icon-qiehuanqiyou"></span>
    <div>
      目前更新阿里巴巴iconfont的方式是：<br>
      1、下载阿里巴巴iconfont上项目的文件夹，删除demo相关的文件；<br>
      2、将文件覆盖到/base/libs/iconfont；<br><br>

      本次使用阿里巴巴iconfont的方式是使用font class的方式引用；<br>
      初始化引入是在src/App.vue的style模板中import的；<br>

    </div>
  </div>
</template>

<script>
  export default {
    name: "dp-icon-example"
  }
</script>

<style scoped>

</style>
