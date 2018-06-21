<template>
  <div>
    <div>
      {{book.id}}--{{book.title}}--{{book.count}}
    </div>
  </div>
</template>

<script>
  import {get, post} from "../../../base/script/http";

  export default {
    name: "book-detail",
    data() {
      return {
        book: {id: '110'}
      }
    },
    mounted() {
      this.book.id = this.$root.$mp.query.id;
      this.getDetail();
    },
    methods: {
      async getDetail() {
        let newBook = await post('weapp/book/addCount', {id: this.book.id});
        this.book = newBook;
      },
    },
  }
</script>

<style scoped lang="scss">

</style>
