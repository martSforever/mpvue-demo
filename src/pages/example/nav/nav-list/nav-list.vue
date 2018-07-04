<template>
  <div class="nav-list-wrapper">
    <div class="nav-list-item" v-for="(item,index) in users" :key="index" @click="handleClickItem(item)">
      <div>{{item.name}}</div>
      <div>{{item.age}}岁</div>
    </div>
    <div>
      <button @click="replaceTo">replace to</button>
    </div>
    <div>
      <button @click="resetTo">reset to</button>
    </div>

  </div>
</template>

<script>
  import {showModal} from "../../../../base/script/msg";

  export default {
    name: "nav-list",
    data() {
      return {
        users: [
          {name: '张三', age: '22'},
          {name: '李四', age: '44'},
          {name: '王五', age: '77'},
        ]
      }
    },
    methods: {
      handleClickItem(item) {
        this.$nav.goto('/pages/example/nav/nav-detail/main', {
          item: item,
          callback: this.sayHelloInNavList
        });
      },
      replaceTo() {
        this.$nav.replaceTo('/pages/example/nav/nav-detail/main', {
          name: 'rose', age: 11
        })
      },
      resetTo() {
        this.$nav.resetTo('/pages/example/nav/nav-detail/main', {
          name: 'ambzer', age: 22
        })
      },
      sayHelloInNavList(user) {
        showModal(`sayHelloInNavList。。。${user.name}`);
      },
    }
  }
</script>

<style scoped lang="scss">
  /*@formatter:off*/
  .nav-list-wrapper{
    display: flex;
    padding: 0 24rpx;
    flex-direction: column;
    .nav-list-item{
      height: 96rpx;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      border-bottom: solid 1rpx #ddd;
    }
  }
  /*@formatter:on*/
</style>
