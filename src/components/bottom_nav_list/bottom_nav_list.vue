<template>
  <!--:style="{background:backgroundColor}"-->
  <div class="bottom-nav-list">
    <i class="icon" :class="iconType"></i>
    <span>
      {{title}}
    </span>
  </div>
</template>
<script>
  export default{
      msg:'bottom-nav-list',
      props:['title','backgroundColor','iconType'],
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .bottom-nav-list
    width 1.5rem
    height 1rem
    color #000
    float left
    box-sizing border-box
    .icon
      display block
      font-size 0.35rem
      padding-top 0.2rem
      padding-bottom 0.1rem
      color #000
    span
      font-size 0.2rem
      font-weight 300
      position relative
      top -0.6rem
</style>
