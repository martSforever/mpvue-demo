<template>
  <div class="page-wrapper">
    <div>this is page1</div>
    <div><input v-model="val"/></div>
    <scroll-view class="list-wrapper" :scroll-y="true" @scrolltolower="handleScrolltolower">
      <div class="list-item" v-for="(item,index) in [1,2,3,4,5]" :key="index">
        {{index}}
      </div>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    name: "page1",
    data() {
      return {
        val: 'ssda'
      }
    },
    methods:{
      handleScrolltolower(){
          console.log('handleScrolltolower')
      },
    },
    onLoad() {
      console.log('page1 onload...', this.$nav.currentPageParam);
    },
    mounted() {
      console.log('page1 mounted...');
    },
    created() {
      console.log('page1 created...');
    },
    onReachBottom() {
      console.log('onReachBottom....');
    },
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
.page-wrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .list-wrapper{
    flex: 1;
    overflow: scroll;
    .list-item{
      height: 300px;
      background-color: brown;
      color: white;
      margin-bottom: 12px;
    }
  }
}
/*@formatter:on*/
</style>
