<template>
  <div class="main-button text-align-c background-cover">
    <div class="shadow">
      <i class="icon icon-stop"></i>
    </div>
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
  .main-button
    position fixed
    width 50px
    height 50px
    z-index 99
    border-radius 50%
    bottom 5px
    left calc(50% - 25px)
    line-height 60px
    color #ffffff
    background-image url(../../assets/p2.png)
    overflow hidden
    .shadow
      .icon
        font-size 20px
        color #fff
</style>
