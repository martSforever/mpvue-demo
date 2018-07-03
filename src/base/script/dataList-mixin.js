import {get} from "../../../src/base/script/http";
import config from '../../../src/base/config/config';

/*
<div style="height: 100px">
  {{dataOptions.dataList.length}}--{{dataOptions.page}}
  <button @click="reload">重新加载</button>
  <button @click="loadNextPage">加载下一页</button>
</div>
*/

export let dataListMixin = {
  data() {
    return {
      dataOptions: {
        dataList: [],               //请求得到的数据数组
        page: 0,                    //当前页
        more: true,                 //是否能够加载更多数据
        autoInitialized: true,      //是否初始化的时候自动请求数据
      },
    }
  },
  methods: {
    /*重新请求数据*/
    async reload() {
      this.__getList(true);
    },
    /*加载下一页数据*/
    async loadNextPage() {
      if (!this.dataOptions.more) {
        return;
      }
      this.dataOptions.page = this.dataOptions.page + 1;
      this.__getList(false);
    },
    async __getList(init) {
      !!init && (this.dataOptions.page = 0);
      wx.showNavigationBarLoading();
      let list = await get(this.dataOptions.url, {page: this.dataOptions.page});
      this.dataOptions.more = !(list.length < config.pageSize && this.dataOptions.page > 0)
      if (init) {
        this.dataOptions.dataList = list;
        wx.stopPullDownRefresh();
      } else {
        /*下拉刷新不能直接覆盖，而是累加*/
        this.dataOptions.dataList = this.dataOptions.dataList.concat(list);
      }
      wx.hideNavigationBarLoading();
    },
  },
  mounted() {
    if (this.dataOptions.autoInitialized) {
      this.__getList(true);
    } else {
      console.log('禁用了自动初始化数据功能！');
    }
  },
  onPullDownRefresh() {
    this.__getList(true);
  },
  onReachBottom() {
    if (!this.dataOptions.more) {
      return;
    }
    this.dataOptions.page = this.dataOptions.page + 1;
    this.__getList(false);
  },
}
