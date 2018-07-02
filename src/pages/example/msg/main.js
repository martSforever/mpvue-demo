import Vue from 'vue'
import Msg from './Msg'
import {packing} from "../../../base/script/navigator";
packing(Msg)
const msg = new Vue(Msg);
msg.$mount();

export default {}
