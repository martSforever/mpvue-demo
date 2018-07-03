import App from './datalist-mixin-example'
import Vue from 'vue'
import {packing} from "../../../base/script/navigator";
packing(App)
const app = new Vue(App);
app.$mount();

export default {
  config:{
    enablePullDownRefresh: true
  }
}
