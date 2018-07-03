<template>
  <div>
    <div class="title">lnk-switch-example</div>
    <div>
      <div>基本用法</div>
      <div>
        <lnk-switch v-model="val1"/>--{{val1}}
      </div>
    </div>
    <div>
      <div>自定义true以及false值</div>
      <div>
        <lnk-switch v-model="val2" true-value="1" false-value="0"/>--{{val2}}
      </div>
    </div>
    <div>
      <div>使用ny</div>
      <div>
        <lnk-switch v-model="val3" :ny="true"/>--{{val3}}
      </div>
    </div>
  </div>
</template>

<script>
  import LnkSwitch from "../../../base/base-component/lnk-switch/lnk-switch";

  export default {
    components: {LnkSwitch},
    name: "lnk-switch-example",
    data() {
      return {
        val1:null,
        val2:null,
        val3:null,
        val4:null,
        val5:null,
      }
    },
  }
</script>

<style scoped lang="scss">
/*@formatter:off*/
.title{
  display: flex;
  justify-content: center;
}
/*@formatter:on*/
</style>
