<template>
  <div>
    <div>dev1</div>
    <div>
      <input v-model="val"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dev1",
    data() {
      return {
        val:'sssss'
      }
    },
    created() {
      console.log('dev1 is created...');
    },
    mounted() {
      console.log('dev1 is mounted...')
    },
    onLoad() {
      console.log('dev1 is onLoad...');
    },
  }
</script>

<style scoped>

</style>
