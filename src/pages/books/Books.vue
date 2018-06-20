<template>
  <div>
    <card v-for="(book,index) in books" :key="index" :book="book"></card>
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
        books: []
      }
    },
    created() {
    },
    methods: {
      async getList() {
        let list = await get('weapp/book/list');
        this.books = list;
      },
    },
    mounted() {
      this.getList();
    },
  }
</script>

<style>

</style>
