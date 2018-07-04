<template>
  <div>
    <div class="title">
      this is nav detail page...
    </div>
    <div><input v-model="user.name"/></div>
    <div>
      <button @click="commit">提交</button>
      <button @click="back()">返回</button>
      <button @click="callTopPageCallback">调用父页面传递的回调函数</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-detail",
    data() {
      return {
        user: {},
        topPageCallback: null
      }
    },
    methods: {
      commit() {
        this.$nav.currentPageParam = this.user
      },
      back() {
        this.$nav.goBack();
      },
      callTopPageCallback() {
        this.topPageCallback && this.topPageCallback(this.user);
      },
    },
    onLoad() {
      let {item, callback} = this.$nav.currentPageParam
      this.user = item;
      this.topPageCallback = callback;
    },
  }
</script>

<style scoped>

</style>
