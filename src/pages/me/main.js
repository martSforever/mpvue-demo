import Vue from 'vue'
import Me from './Me'
import {packing} from "../../base/script/navigator";
packing(Me);
const me = new Vue(Me);
me.$mount();

export default {}
