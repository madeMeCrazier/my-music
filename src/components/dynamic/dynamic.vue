<template>
  <div id="music">
    <v-header
      title="全部动态"
      iconLeftLink="http://www.qq.com"
      iconLeftType="icon-sousuo"
      iconRightType="icon-lingdang"
      iconRightLink="http://www.qq.com"
      background="background-image: linear-gradient(to right, #d299c2 0%, #fef9d7 100%);"
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
