<template>
  <div class="dev-wrapper">
    <lnk-switch v-model="isChecked"/>
  </div>
</template>

<script>


  import LnkSwitch from "../../base/base-component/lnk-switch/lnk-switch";

  export default {
    components: {LnkSwitch},
    name: "dev",
    data() {
      return {
        isChecked: false,
      }
    },
    methods: {
    },
    computed: {
    },
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  /*@formatter:on*/
</style>
