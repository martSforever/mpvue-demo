<template>
  <div class="dev-wrapper">
    <div class="test-btn" @click="sayHello">sayhello</div>
    <lnk-switch v-model="isChecked"/>
    <div class="open-btn-wrapper">
      <div class="open-btn" @click="openPopover">oo</div>
    </div>
    <div class="popover-wrapper" :style="popoverWrapperStyles" @click="closePopover">
      <div class="close-btn-wrapper">
        <div class="close-btn" @click="openPopover">cc</div>
      </div>
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
    name: "dev",
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
      openPopover() {
        this.isChecked = true;
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
  .test-btn{
    width: 100%;
    height: 44px;
    background-color: blueviolet;
    color: white;
  }
  .open-btn-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    .open-btn{
      height: 200rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background-color: brown;
      color: white;
    }
  }
  .popover-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(black,0.3);
    transition: all 0.4s;
    display: flex;
    justify-content: flex-end;
    .close-btn-wrapper{
      height: 100%;
      display: inline-flex;
      align-items: center;
      .close-btn{
        height: 200rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: brown;
        color: white;
      }
    }
    .popover-content{
      height: 100%;
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
