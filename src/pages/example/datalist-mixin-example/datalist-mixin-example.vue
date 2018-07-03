<template>
  <div class="list-wrapper">
    <card v-for="(book,index) in dataOptions.dataList"
          :key="index"
          :book="book"
    ></card>
    <div class="text-footer" v-if="!dataOptions.more">
      没有更多数据了
    </div>
  </div>
</template>

<script>


  import {dataListMixin} from "../../../base/script/dataList-mixin";
  import Card from "../../../base/components/Card/Card";

  export default {
    components: {Card},
    name: "datalist-mixin-example",
    mixins: [dataListMixin],
    data() {
      return {
        dataOptions: {
          url: 'weapp/book/list',
        },
      }
    },
  }
</script>

<style scoped>

</style>
