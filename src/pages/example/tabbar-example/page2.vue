<template>
  <div>
    this is page2
  </div>
</template>

<script>
  export default {
    name: "page2",
    onLoad() {
      console.log('page2 onload...',this.$nav.currentPageParam);
    },
    mounted() {
      console.log('page2 mounted...');
    },
    created() {
      console.log('page2 created...');
    },
  }
</script>

<style scoped>

</style>
