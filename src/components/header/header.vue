<template>
  <div id="header" :style="background">
    <i class="icon-left" :class="iconLeftType" :href="iconLeftLink"></i>
    <p class="title">
      {{title}}
    </p>
    <i class="icon-right" :class="iconRightType" :href="iconRightLink"></i>
  </div>
</template>

<script>
  export default{
    props:['title','link','iconLeftType','iconRightType','iconLeftLink','iconRightLink','background'],
    data(){
      return{

      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #header
    width 100%
    height 0.9rem
    position fixed
    top 0rem
    left 0rem
    z-index 99
    font-size 0.35rem
    color #ffffff
    border-bottom 0.01rem solid #ffffff
    text-align center
    .icon-left
      display block
      position absolute
      top 0.25rem
      left 0.2rem
      font-size 0.35rem
      color #fff
    .icon-right
      display block
      position absolute
      top 0.25rem
      right 0.2rem
      font-size 0.35rem
      color #fff
    .title
      line-height 0.9rem
</style>
