<template>
  <div>
    book detail
    <div>
      {{book.id}}
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
      console.log();
      this.book.id = this.$root.$mp.query.id;
      this.getDetail();
    },
    methods: {
      async getDetail() {
        console.log('getDetail-11')
        let newBook = await post('weapp/book/addCount',{id:this.book.id});
        console.log('getDetail-22')
        console.log(newBook);
      },
    },
  }
</script>

<style scoped lang="scss">

</style>
