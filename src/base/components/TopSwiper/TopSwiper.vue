<template>
  <div class="top-swiper">
    <swiper
      :indicator-dots="true"
      :indicator-color="indicatorColor"
      :autoplay="true"
      :interval="6000"
      :duration="1000"
      :circular="true"
    >
      <div v-for="(imgs,index) in imgChunks" :key="index">
        <swiper-item>
          <div class="slider-item-wrapper">
            <img :src="img.image" mode="aspectFit" class="slider-item-image" v-for="(img,index2) in imgs" :key="index2">
          </div>
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>

  import {colors} from "../../config/config";

  export default {
    name: "top-swiper",
    props: {
      imgChunks: []
    },
    data() {
      return {
        indicatorColor: colors.red
      }
    },
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .slider-item-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 750rpx;
    height: 300rpx;
    overflow: hidden;
    .slider-item-image {
      max-height: 280rpx;
      width: 220rpx;
    }
  }

  /*@formatter:on*/
</style>
