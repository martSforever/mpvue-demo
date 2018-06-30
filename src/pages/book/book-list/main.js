import App from './book-list'
import {Page} from "../../../base/script/navigator";

const app = new Page(App);
app.$mount();

export default {
  config: {
    enablePullDownRefresh: true
  }
}
