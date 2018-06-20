import Vue from 'vue'
import App from './App'

Vue.config.prodctionTip = false;

const app = new Vue(App);
app.$mount();

export default {
  config: {
    pages: ['^pages/books/main'],
    window: {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#EA5149",
      "navigationBarTitleText": "蜗牛图书",
      "navigationBarTextStyle": "light"
    },
    tabBar: {
      selectedColor: "#EA5149",
      list: [
        {
          text: '图书',
          iconPath: "static/img/book.png",
          selectedIconPath: 'static/img/book-active.png',
          pagePath: 'pages/books/main',
        },
        {
          text: '评论列表',
          iconPath: "static/img/todo.png",
          selectedIconPath: 'static/img/todo-active.png',
          pagePath: 'pages/comments/main',
        },
        {
          text: '个人中心',
          iconPath: "static/img/me.png",
          selectedIconPath: 'static/img/me-active.png',
          pagePath: 'pages/me/main',
        },
      ]
    }
  }
}
