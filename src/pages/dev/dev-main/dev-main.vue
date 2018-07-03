<template>
  <div>
    <div class="page-tabbar">
      <div class="page-tab">
        <div
          class="page-tab-item"
          :class="{active:activeVal === item.val,ddd:activeVal === item.val}"
          v-for="(item,index) in pageTabItems"
          :key="index"
          @click="handleChangeTab(item,index)"
        >
          {{item.label}}
        </div>
      </div>
      <div class="page-content">
        <div class="page-content-item" v-if="activeVal === 'yi'">
          <dev1/>
        </div>
        <div class="page-content-item" v-if="activeVal === 'er'">
          <dev2/>
        </div>
        <div class="page-content-item" v-if="activeVal === 'san'">
          <dev3/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  import Dev1 from "../dev1/dev1";
  import Dev2 from "../dev2/dev2";
  import Dev3 from "../dev3/dev3";
  import {showModal} from "../../../base/script/msg";

  export default {
    components: {
      Dev3,
      Dev2,
      Dev1
    },
    name: "dev-main",
    data() {
      return {
        isChecked: null,
        activeVal: 'yi',
        pageTabItems: [
          {label: '页面一', val: 'yi'},
          {label: '页面二', val: 'er'},
          {label: '页面三', val: 'san'},
        ]
      }
    },
    methods: {
      handleChangeTab(item, index) {
        this.activeVal = item.val;
      },
    },
    mounted() {
      showModal("请在app.json中设置主页为：^pages/dev/dev-main/main，tabbar第一个页面为：pages/dev/dev-main/main")
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .page-tabbar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    .page-tab{
      height: 88rpx;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .page-tab-item{
        height: 100%;
        color: #ddd;
        width: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active{
          border-bottom: black solid 3px;
          box-sizing: border-box;
          color: black;
        }
      }
    }
    .page-content{
      flex: 1;
      position: relative;
      .page-content-item{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
  /*@formatter:on*/
</style>
