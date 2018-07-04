<template>
  <div class="lnk-list">
    <div class="lnk-list-head">lnk-list head...{{lnkListOptions.isLoading}}</div>
    <scroll-view :scroll-y="true" @scrolltolower="__handleScrolltolower" class="lnk-list-content" lower-threshold="10">
      <slot></slot>
    </scroll-view>
    <div class="lnk-list-foot">
      <div v-if="lnkListOptions.hasMore === false" class="tip">已经加载完毕</div>
    </div>
    <div class="lnk-list-flash-wrapper" @click="reload">
      <span class="iconfont dp-icon-refresh" :class="flashIconClasses"></span>
    </div>
  </div>
</template>

<script>
  import config from "../../config/config";
  import {get} from "../../script/http";
  import {classes} from "../../script/css";

  export default {
    name: "lnk-list",
    props: {
      lnkListOptions: {
        type: Object,
        desc: 'lnk-list请求参数'
      },
      autoInitialized: {
        type: Boolean,
        default: true,
        desc: '是否自动加载'
      }
    },
    data() {
      return {
        dataList: this.lnkListOptions.dataList
      }
    },
    methods: {
      /*重新请求数据*/
      async reload() {
        console.log('重新加载数据...')
        this.__getList(true);
      },
      /*加载下一页数据*/
      async loadNextPage() {
        console.log('加载下一页数据...')
        if (!this.lnkListOptions.hasMore && !this.lnkListOptions.isLoading) {
          return;
        }
        this.lnkListOptions.page = this.lnkListOptions.page + 1;
        this.__getList(false);
      },
      /*
      * 请求数据；
      * init：是否重新初始化，是则在请求得到的数据之后，将原有dataList数据清空，在吧请求得到的数据重新放回dataList中，
      * 否则直接将请求得到的数据添加到dataList中
      */
      async __getList(init) {
        console.log('__getList')
        !!init && (this.lnkListOptions.page = 0);
        wx.showNavigationBarLoading();
        this.lnkListOptions.isLoading = true;
        let list = await get(this.lnkListOptions.url, {page: this.lnkListOptions.page});
        this.lnkListOptions.hasMore = !(list.length < config.pageSize && this.lnkListOptions.page > 0)
        if (init) {
          this.lnkListOptions.dataList.removeAll();
          this.lnkListOptions.dataList.pushArray(list);
        } else {
          /*下拉刷新不能直接覆盖，而是累加*/
          this.lnkListOptions.dataList.pushArray(list);
        }
        wx.hideNavigationBarLoading();
        this.lnkListOptions.isLoading = false;
      },
      async __handleScrolltolower() {
        if (!this.lnkListOptions.hasMore && !this.lnkListOptions.isLoading) {
          return;
        }
        this.lnkListOptions.page = this.lnkListOptions.page + 1;
        this.__getList(false);
      },
    },
    onLoad() {
      console.log('lnk-list onload...')
      if (!this.lnkListOptions) {
        console.error('lnk-list-optinos不能为空！');
        return;
      }
      if (!this.lnkListOptions.dataList) {
        console.error('lnkListOptions.dataLis必须初始化为空数组，即[]，否则调用组件无法动态渲染dataList中的信息');
        return;
      }
      if (!this.autoInitialized) {
        console.log('禁用了自动初始化数据功能！');
        return;
      }
      this.lnkListOptions.isLoading = false;

      this.__getList(true);
    },
    computed: {
      flashIconClasses() {
        let c = classes({
          'load-loop': !!this.lnkListOptions.isLoading
        });
        console.log(c)
        return c;
      },
    }
  }
</script>

<style lang="scss">
  /*@formatter:off*/
    .lnk-list {
      display: flex;
      flex: 1;
      position: relative;
      flex-direction: column;
      .lnk-list-content {
        flex: 1;
        overflow-y: scroll;
      }
      .lnk-list-foot {
        .tip {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: deepskyblue;
        }
      }
      .lnk-list-flash-wrapper{
        position: absolute;
        right: 24rpx;
        bottom: 24rpx;
        width: 96rpx;
        height: 96rpx;
        border-radius: 64rpx;
        background-color: blueviolet;
        color: white;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont{
          font-size: 66rpx;
        }
      }
  }
  /*@formatter:on*/
</style>
