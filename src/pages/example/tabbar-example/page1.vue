<template>
  <div>
    <div>this is page1</div>
    <div><input v-model="val"/></div>
  </div>
</template>

<script>
  export default {
    name: "page1",
    data() {
      return {
        val: 'ssda'
      }
    },
    onLoad() {
      console.log('page1 onload...');
    },
    mounted() {
      console.log('page1 mounted...');
    },
    created() {
      console.log('page1 created...');
    },
  }
</script>

<style scoped>

</style>
