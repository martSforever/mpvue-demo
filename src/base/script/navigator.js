import Vue from 'vue';
import {encodeGetParam} from "./util";

let datas = [];

export let nav = {
  goto(url, param, success, fail, complete) {
    let options = {url: `${url}?${encodeGetParam(param)}`, success, fail, complete};
    datas.push(param);
    wx.navigateTo(options);
  },
  goBack() {
    wx.navigateBack();
    let param = datas.pop();
    console.log('goBack', param)
    return param;
  },
  get currentPageData() {
    if (!!datas && datas.length > 0) {
      return datas[datas.length - 1];
    } else {
      console.warn('datas is empty');
      return null;
    }
  },
  set currentPageData(value) {
    let abadon = datas.pop();
    datas.push(value);
    return abadon;
  },
};

Vue.prototype.$nav = nav;
Vue.mixin({
  onUnload(){
      console.log('navigator onUnload...');
  },
  onLoad(){
    console.log('navigator onLoad...');
  },
})
