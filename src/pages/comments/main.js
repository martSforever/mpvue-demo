import Vue from 'vue'
import App from './Comments'
import {packing} from "../../base/script/navigator";
packing(App)
const app = new Vue(App);
app.$mount();
