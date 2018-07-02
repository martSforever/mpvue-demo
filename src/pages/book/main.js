import App from './book'
import Vue from 'vue'
import {packing} from "../../base/script/navigator";
packing(App)
const app = new Vue(App);
app.$mount();

export default {
  config:{
    window:{
      "navigationBarTitleText":"蜗牛图书"
    }
  }
}
