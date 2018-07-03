<template>
  <div>
    dev pages
  </div>
</template>

<script>


  import LnkSwitch from "../../base/base-component/lnk-switch/lnk-switch";

  export default {
    components: {LnkSwitch},
    name: "dev",
    data() {
      return {
        isChecked: null,
      }
    },
    methods: {},
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .active{
    background-color: black;
    color: white;
  }
  .in-active{
    background-color: blueviolet;
    color: deepskyblue;
  }

  .example-item{
    margin-bottom: 12px;
  }
  /*@formatter:on*/
</style>
