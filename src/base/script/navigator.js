import Vue from 'vue';
import {encodeGetParam} from "./util";


export let navigator = {
  goto(url, param, success, fail, complete) {
    let options = {url: `${url}?${encodeGetParam(param)}`, success, fail, complete};
    wx.navigateTo(options);
  },
  goBack() {
    wx.navigateBack();
  },
};

Vue.prototype.$nav = navigator;
