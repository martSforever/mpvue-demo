<template>
    <div>
      <div>this is dev pages...{{value}}</div>
      <lnk-switch v-model="isChecked"/>
    </div>
</template>

<script>

    import LnkSwitch from "../../base/base-component/lnk-switch/lnk-switch";

    export default {
      components: {LnkSwitch},
      name: "dev",
      data(){
          return{
            isChecked:null
          }
      },
      computed:{
        value(){
            return JSON.stringify(this.isChecked);
        },
      }
    }
</script>

<style scoped>

</style>
