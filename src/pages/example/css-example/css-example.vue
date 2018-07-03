<template>
  <div>
    <div>
      样式绑定示例界面
      <lnk-switch v-model="isChecked"></lnk-switch>
    </div>
    <div :class="classes1" class="example-item">
      hello world...class 绑定(不可以使用计算属性，绑定classesObject)
    </div>
    <div :class="{active:isChecked,'in-active': !isChecked}" class="example-item">
      hello world...class 绑定(正确绑定方式)
    </div>
    <div :class="classes2" class="example-item">
      hello world...class 绑定(使用转换函数绑定计算属性)
    </div>

    <div :style="styles1" class="example-item">
      hello world...styles 绑定(不可以使用计算属性，绑定stylesObject)
    </div>
    <div :style="{backgroundColor:isChecked?'black':'#ddd',color:'white'}" class="example-item">
      hello world...styles 绑定(正确绑定方式)
    </div>
    <div :style="styles2" class="example-item">
      hello world...styles 绑定(使用转换函数绑定计算属性)
    </div>
  </div>
</template>

<script>


  import LnkSwitch from "../../../base/base-component/lnk-switch/lnk-switch";
  import {classes, styles} from "../../../base/script/css";

  export default {
    components: {LnkSwitch},
    name: "css-example",
    data() {
      return {
        isChecked: null,
      }
    },
    methods: {},
    computed: {
      classes1() {
        return {
          active: this.isChecked,
          'in-active': !this.isChecked
        }
      },
      classes2() {
        return classes({
          active: this.isChecked,
          'in-active': !this.isChecked
        })
      },
      styles1() {
        return {backgroundColor: '#ddd', color: 'white'}
      },
      styles2() {
        return styles({
          backgroundColor: this.isChecked?'black':'#ddd',
          color: 'white',
        });
      },
    }
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
