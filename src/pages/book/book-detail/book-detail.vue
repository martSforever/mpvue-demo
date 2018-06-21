<template>
  <div>
    book detail
    <button @click="back">back</button>
  </div>
</template>

<script>
  export default {
    name: "book-detail",
    mounted() {
    },
    methods: {
      back() {
        console.log(getApp());
        this.$nav.goBack();
      },
    },
    onLoad(param) {
      console.log('param', param)
    },
  }
</script>

<style scoped lang="scss">

</style>
