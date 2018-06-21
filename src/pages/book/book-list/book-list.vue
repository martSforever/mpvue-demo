<template>
  <div>
    <card v-for="(book,index) in dataOptions.dataList" :key="index" :book="book" @click="showDetail(book)"></card>
    <div class="text-footer" v-if="!dataOptions.more">
      没有更多数据了
    </div>
  </div>
</template>

<script>

  import Card from "../../../base/components/Card/Card";
  import dataListMixin from "../../../base/script/dataList-mixin";

  export default {
    components: {Card},
    name: "book-list",
    mixins: [dataListMixin],
    data() {
      return {
        dataOptions: {
          url: 'weapp/book/list',
        },
      }
    },
    methods: {
      showDetail(book) {
        console.log('showDetail');
        this.$nav.goto('../book-detail/main',book)
      },
    }
  }
</script>

<style>

</style>
