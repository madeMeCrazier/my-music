<template>
  <div id="music">
    <v-header
      title="帐号"
      iconLeftLink="http://www.qq.com"
      iconLeftType="icon-sousuo"
      iconRightType="icon-lingdang"
      iconRightLink="http://www.qq.com"
      background="background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);"
    ></v-header>
  </div>
</template>
<script>
  import header from './../header/header.vue'
  export default{
    components:{
      'v-header':header
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">

</style>
