<template>
  <div class="dev-wrapper">
    <div class="wrapper">
      <div class="item" v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "horizontal-scroll",
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
  .wrapper{
    width: 100%;
    overflow: scroll;
    height: 300px;
    background-color: brown;
    padding: 12px 0;
    white-space: nowrap;
    box-sizing: border-box;
    .item{
      width: 276px;
      height: 276px;
      background-color: blueviolet;
      margin-right: 12px;
      display: inline-block;
    }
  }
  /*@formatter:on*/
</style>
