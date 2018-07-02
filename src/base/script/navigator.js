import Vue from 'vue';

let pageDatas = [];

export let nav = {
  goto(url, params, success, fail, complete) {
    let options = {url: url, success, fail, complete};
    pageDatas.push({
      url: url,
      params: params,
      timestamp: new Date().yyyyMMdd_hhmmss()
    });
    wx.navigateTo(options);
  },
  goBack() {
    wx.navigateBack();
  },
  get currentPageParam() {
    return !!nav.currentPageData ? Object.assign({}, nav.currentPageData.params) : null;
  },
  set currentPageParam(newParam) {
    if (!!pageDatas && pageDatas.length > 0) {
      let oldParam = pageDatas[pageDatas.length - 1].params;
      Object.assign(oldParam, newParam);
    } else {
      console.warn('pageDatas is empty');
      return null;
    }
  },
  get currentPageData() {
    if (!!pageDatas && pageDatas.length > 0) {
      return pageDatas[pageDatas.length - 1];
    } else {
      console.warn('pageDatas is empty');
      return null;
    }
  },
  get pageDatas() {
    return pageDatas;
  },
};

Vue.prototype.$nav = nav;

export function packing(component) {
  if (!component.mixins) component.mixins = [];
  component.mixins.push({
    onLoad() {
      // console.log(nav.currentPageParam)
      console.log(pageDatas)
    },
    onUnload() {
      let abandon = pageDatas.pop();
      // console.log(abandon,nav.currentPageParam)

    },
  })
}
