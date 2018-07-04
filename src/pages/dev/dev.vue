<template>
  <div class="dev-wrapper">
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
  import LnkList from "../../base/base-component/lnk-list/lnk-list.vue";

  export default {
    components: {
      LnkList
    },
    name: "dev",
    data() {
      return {
        lnkListOptions: {
          url: 'weapp/book/list',
          dataList: [],
          isLoading:false
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
