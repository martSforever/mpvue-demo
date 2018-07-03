import Vue from 'vue'
import App from './App'
import './base/script/navigator';
import './base/script/prototype';

Vue.config.prodctionTip = false;

const app = new Vue(App);
app.$mount();

export default {
  config: {
    pages: ['^pages/dev/main'],
    window: {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#EA5149",
      "navigationBarTitleText": "mpvue demo",
      "navigationBarTextStyle": "light"
    },
    tabBar: {
      selectedColor: "#EA5149",
      list: [
        {
          text: '开发测试',
          iconPath: "static/img/development-inactive.png",
          selectedIconPath: 'static/img/development-active.png',
          pagePath: 'pages/dev/main',
        },
        {
          text: '示例',
          iconPath: "static/img/caselist-inactive.png",
          selectedIconPath: 'static/img/caselist-active.png',
          pagePath: 'pages/example/main',
        },
        {
          text: '个人中心',
          iconPath: "static/img/me-inactive.png",
          selectedIconPath: 'static/img/me-active.png',
          pagePath: 'pages/me/main',
        },
      ]
    }
  }
}
