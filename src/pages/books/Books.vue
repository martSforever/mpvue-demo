<template>
  <div>
    <div>图书列表界面</div>
    <input v-model="message"/>
    <button @click="toast">toast</button>
    <button @click="loading">loading</button>
    <button @click="modal">modal</button>
    <button @click="confirm">confirm</button>
    <button @click="actionSheet">actionSheet</button>
  </div>
</template>

<script>
  import {hideLoading, showActionSheet, showConfirm, showLoading, showModal, showToast} from "../../base/script/msg";

  export default {
    name: "me",
    data() {
      return {
        message: '确定要提交记录吗？'
      }
    },
    created() {
    },
    methods: {
      toast() {
        showToast(this.message, {image: '/static/img/book-active.png'});
      },
      loading() {
        showLoading('loading haha...');
        setTimeout(() => {
          hideLoading();
        }, 5000)
      },
      modal() {
        showModal(this.message, {
          success(ret) {
            console.log('complete', ret);
          },
        });
      },
      confirm() {
        showConfirm(this.message, {
          onConfirm() {
            console.log('handle onConfirm');
          }, onCancel() {
            console.log('handle onCancel');
          },
        })
      },
      actionSheet() {
        showActionSheet(['菜单一', '菜单二'], {
          success(ret){
            console.log(ret);
          },
        })
      },
    }
  }
</script>

<style>

</style>
