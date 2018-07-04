<template>
  <div>
    <div>
      this is child head...
    </div>
    <slot name="listContent"></slot>
    <div>
      this is child foot...
    </div>
  </div>
</template>

<script>
  export default {
    name: "test-slot-child"
  }
</script>

<style scoped>

</style>
