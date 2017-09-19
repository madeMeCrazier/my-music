<template>
  <div class="main-button text-align-c">
    <i class="icon-heart" style="font-size: 20px"></i>
  </div>
</template>
<script>
  export default {
    name: 'main_button',
    data(){
        return{
            msg:'this is a main_button'
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .main-button{
    position fixed
    width 50px
    height 50px
    z-index 99
    border-radius 50%
    background rgba(0,0,0,0.7)
    bottom 5px
    left calc(50% - 25px)
    line-height 60px
    color #ffffff
  }
</style>
