<template>
  <div class="rate">
    {{value}}
    <div class="star-wrapper">
      <span>☆☆☆☆☆</span>
      <div class="hollow" :style="hollowStyles">★★★★★</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rate",
    props: {
      value: {
        type: Number,
        default: 0
      }
    },
    computed: {
      hollowStyles() {
        return `width:${this.value * 10}%`;
      },
    }
  }
</script>

<style lang="scss">
  /*@formatter:off*/
  .rate{
    .star-wrapper{
      display: inline-block;
      position: relative;
      font-size: 1em;
      color: #EA5149;
      .hollow{
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0;
        overflow: hidden;
      }
    }
  }
  /*@formatter:on*/
</style>
