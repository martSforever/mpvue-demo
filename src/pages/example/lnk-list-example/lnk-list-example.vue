<template>
  <div class="dev-wrapper">
    <div>
      使用lnk-list的步骤：<br>
      1、首先lnk-list的父元素，必须是flex布局，lnk-list的flex为1，会自动填充剩下的高度<br>
      2、然后在lnkListOptions中必须存在url、dataList:[]，否则无法正常在lnk-list节点内以外的地方上实时渲染datalist中的数据，
      当然，要使用isLoading也是一样的
    </div>
    <div>{{'length-->>'+lnkListOptions.dataList.length}}</div>
    <div>{{'isLoading-->>'+lnkListOptions.isLoading}}</div>
    <lnk-list :lnk-list-options="lnkListOptions">
      <div class="list-item" v-for="(item,index) in dataList" :key="index">
        <div>{{item.title}}</div>
      </div>
    </lnk-list>
  </div>
</template>

<script>

  import LnkList from "../../../base/base-component/lnk-list/lnk-list";

  export default {
    components: {
      LnkList
    },
    name: "lnk-list-example",
    data() {
      return {
        lnkListOptions: {
          url: 'weapp/book/list',
          dataList: [],
          isLoading: false
        }
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .dev-wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    .list-item{
      height: 100px;
      background-color: brown;
      color: white;
    }
  }
  /*@formatter:on*/
</style>
