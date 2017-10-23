<template>
  <div class="main-button-box">
    <div class="main-button text-align-c background-cover">
      <div class="shadow1">
        <i class="icon icon-stop"></i>
      </div>
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
  .main-button-box
    position fixed
    width 1.5rem
    height 1rem
    bottom 0
    z-index 99
    //background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)
    left calc(50% - 0.75rem)
    .main-button
      width 0.8rem
      height 0.8rem
      margin 0.1rem auto
      z-index 99
      border-radius 50%
      line-height 1rem
      color #ffffff
      overflow hidden
      background-image url(/static/image/p2.png)
      overflow hidden
      .shadow1
        background rgba(0,0,0,0.3)
      .icon
        font-size 0.4rem
        color #fff
        position relative
        top -0.25rem
</style>
