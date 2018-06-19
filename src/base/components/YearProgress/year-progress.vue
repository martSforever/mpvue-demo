<template>
  <div class="year-progress">
    <progress :percent="percent" active-color="#EA5A49"></progress>
    <div class="label"><p>{{year}}年已经过去了{{days}}天，{{percent}}%</p></div>
  </div>
</template>

<script>
  export default {
    name: "year-progress",
    created() {
    },
    methods: {
      /*是不是闰年*/
      isLeapYear() {

      },
      getDaysOfYear() {

      },
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
      days() {
        //今年第一天
        let start = new Date();
        start.setMonth(0);
        start.setDate(1);
        return (new Date().getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
      },
      percent() {
        let start = new Date();
        start.setMonth(0);
        start.setDate(1);

        let end = new Date();
        end.setMonth(11);
        end.setDate(31);

        let all = (end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000);

        return (this.days / all * 100).toFixed(0);
      },
    }
  }
</script>

<style lang="scss">
  /*@formatter:off*/
  .year-progress {
    width: 100%;
    .label {
      font-size: 24rpx;
      margin-bottom: 6rpx;
      width: 100%;
      text-align: center;
    }
  }
  /*@formatter:on*/
</style>
