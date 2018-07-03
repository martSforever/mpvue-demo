import App from './dev2'
import Vue from 'vue'
import {packing} from "../../../base/script/navigator";
packing(App)
const app = new Vue(App);
app.$mount();

export default {}
