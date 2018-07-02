import Vue from 'vue'
import App from './example'
import {packing} from "../../base/script/navigator";
packing(App)
const msg = new Vue(App);
msg.$mount();

export default {}
