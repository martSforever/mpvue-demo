<template>
  <div>
    <div class="title">
      this is nav detail page...
    </div>
    <div><input v-model="user.name"/></div>
    <div>
      <button @click="commit">commit</button>
      <button @click="back()">go back</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-detail",
    data() {
      return {
        user: {}
      }
    },
    methods: {
      commit() {
        this.$nav.currentPageParam = this.user
      },
      back() {
        this.$nav.goBack();
      },
    },
    onLoad() {
      this.user = this.$nav.currentPageParam
    },
  }
</script>

<style scoped>

</style>
