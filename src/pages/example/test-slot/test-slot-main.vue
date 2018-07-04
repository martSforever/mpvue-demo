<template>
  <div class="dev-wrapper">
    <div>
      this is test-slot-main
    </div>
    <test-slot-child>
      <template slot="listContent">
        <div class="list-content">
          this is parent content
        </div>
      </template>
    </test-slot-child>
  </div>
</template>
<script>


  import TestSlotChild from "./test-slot-child";

  export default {
    components: {TestSlotChild},
    name: "test-slot-main",
    data() {
      return {
        isChecked: false,
      }
    },
    methods: {},
    computed: {},
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .list-content{
    height: 300px;
    background-color: brown;
    color: white;
  }
  /*@formatter:on*/
</style>
