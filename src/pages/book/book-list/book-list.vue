<template>
  <div>
    <top-swiper :img-chunks="imgChunks" @clickImage="showDetail"/>
    <card v-for="(book,index) in dataOptions.dataList" :key="index" :book="book" @click="showDetail(book)"
          @clickImage="handleClickBooksImage"></card>
    <div class="text-footer" v-if="!dataOptions.more">
      没有更多数据了
    </div>
  </div>
</template>

<script>

  import Card from "../../../base/components/Card/Card";
  import dataListMixin from "../../../base/script/dataList-mixin";
  import {get} from "../../../base/script/http";
  import TopSwiper from "../../../base/components/TopSwiper/TopSwiper";
  import {chunk} from "../../../base/script/util";

  export default {
    components: {
      TopSwiper,
      Card
    },
    name: "book-list",
    mixins: [dataListMixin],
    data() {
      return {
        dataOptions: {
          url: 'weapp/book/list',
        },
        tops: []
      }
    },
    mounted() {
      this.getTop();
    },
    onPullDownRefresh() {
      this.getTop();
    },
    methods: {
      showDetail(book) {
        this.$nav.goto('../book-detail/main', book)
      },
      async getTop() {
        console.log('getTop');
        let tops = await get('weapp/book/topBook', {num: 9});
        this.tops = tops;
      },
      handleClickBooksImage(book) {
        wx.previewImage({
          current: book.image,
          urls: this.dataOptions.dataList.map((book) => book.image)
        });
      },
    },
    computed: {
      imgChunks() {
        return chunk(this.tops, 3);
      },
    }
  }
</script>

<style>

</style>
