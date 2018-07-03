<template>
  <div class="dev-wrapper">
    <lnk-switch v-model="isChecked"/>
    <div class="popover-wrapper" :style="popoverWrapperStyles" @click="closePopover">
      <div class="popover-content" style="width: 500rpx;" @click.stop="handleClickPopoverContent">
        <div @click="sayHello" class="btn">sayHello</div>
      </div>
    </div>
  </div>
</template>

<script>


  import LnkSwitch from "../../../base/base-component/lnk-switch/lnk-switch";
  import {showModal} from "../../../base/script/msg";
  import {styles} from "../../../base/script/css";

  export default {
    components: {LnkSwitch},
    name: "popover-example",
    data() {
      return {
        isChecked: false,
      }
    },
    methods: {
      sayHello() {
        showModal('hello world')
      },
      closePopover() {
        this.isChecked = false;
      },
      handleClickPopoverContent() {

      },
    },
    computed: {
      popoverWrapperStyles() {
        return styles({
          right: this.isChecked ? 0 : `-100%`,
          opacity: this.isChecked ? 1 : 0,
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .popover-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(black,0.3);
    transition: all 0.4s;
    .popover-content{
      height: 100%;
      position: absolute;
      right: 0;
      background-color: white;
    }
    .btn{
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 3px solid black;
    }
  }
  /*@formatter:on*/
</style>
