<template>
  <div>
    this is book`
    <input v-model="pageParam.name"/>
    <button @click="commit">commit</button>
  </div>
</template>

<script>
  export default {
    name: "book",
    data() {
      return {
        pageParam: {}
      }
    },
    onLoad() {
      this.pageParam = this.$nav.currentPageParam
    },
    methods: {
      commit() {
        this.$nav.currentPageParam = this.pageParam
      },
    }
  }
</script>

<style scoped>

</style>
