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
  replaceTo(url, params, success, fail, complete) {
    let options = {url: url, success, fail, complete};
    let abandon = pageDatas.pop();
    pageDatas.push({
      url: url,
      params: params,
      timestamp: new Date().yyyyMMdd_hhmmss()
    });
    pageDatas.push(abandon);
    wx.redirectTo(options);
  },
  resetTo(url, params, success, fail, complete) {
    let options = {url: url, success, fail, complete};
    pageDatas.unshift({});
    pageDatas.unshift({
      url: url,
      params: params,
      timestamp: new Date().yyyyMMdd_hhmmss()
    });
    wx.reLaunch(options);
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


/*
修改navigator的使用方式，发现，在mac下，用之前的方式，就是
const app = new Page(App)；的方式，会导致没法生成wxml文件，好像是一定要在main.js中执行这条代码：
const app = new Vue(App)；才能正常生成wxml文件。
这里稍作修改，就是在
const app = new Vue(App)；之前，调用navigator.js中的packing方法：
packing(App)；就行了；
*/
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
      console.log(pageDatas)

    },
  })
}
