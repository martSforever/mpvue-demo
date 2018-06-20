<template>
  <div>
    <card v-for="(book,index) in books" :key="index" :book="book"></card>
    <div class="text-footer" v-if="!more">
      没有更多数据了
    </div>
  </div>
</template>

<script>
  import {get} from "../../base/script/http";
  import Card from "../../base/components/Card/Card";

  export default {
    components: {Card},
    name: "books",
    data() {
      return {
        books: [],
        page: 0,
        more: true
      }
    },
    created() {
    },
    methods: {
      async getList(init) {
        !!init && (this.page = 0 && (this.more = true));
        wx.showNavigationBarLoading();
        let list = await get('weapp/book/list', {page: this.page});
        if (list.length < 8 && this.page > 0) {
          this.more = false;
        }
        if (init) {
          this.books = list;
          wx.stopPullDownRefresh();
        } else {
          /*下拉刷新不能直接覆盖，而是累加*/
          this.books = this.books.concat(list);
        }
        wx.hideNavigationBarLoading();
      },
    },
    mounted() {
      this.getList(true);
    },
    onPullDownRefresh() {
      console.log('onPullDownRefresh');
      this.getList(true);
    },
    onReachBottom() {
      if (!this.more) {
        return;
      }
      this.page = this.page + 1;
      this.getList(false);
    },
  }
</script>

<style>

</style>
