import App from './nav-list'
import Vue from 'vue'
import {packing} from "../../../../base/script/navigator";
packing(App)
const app = new Vue(App);
app.$mount();

export default {}
