<template>
  <switch :checked="value===trueValue" @change="handleChange"></switch>
</template>

<script>
  /*
  *  封装了小程序的switch组件，lnk-switch可以实现数据双向绑定，指定true-value以及false-value的功能，
  */
  export default {
    name: "lnk-switch",
    props: {
      value: {
        type: [String, Boolean],
        default: true,
        desc:'用于接受v-model双向数据绑定的值'
      },
      trueValue: {
        default: true,
        desc:'当switch为true时，双向绑定的值'
      },
      falseValue: {
        default: false,
        desc:'当switch为false时，双向绑定的值'
      },
      ny: {
        type: Boolean,
        default: false,
        desc:'当ny为true时，会自动将true-value设置为Y，将false-value设置为N'
      }
    },
    data() {

    },
    mounted() {
      if (this.ny) {
        this.trueValue = 'Y';
        this.falseValue = 'N'
      }
    },
    methods: {
      handleChange(e) {
        this.$emit('input', e.target.value ? this.trueValue : this.falseValue)
      },
    }
  }
</script>

<style lang="scss">


</style>
