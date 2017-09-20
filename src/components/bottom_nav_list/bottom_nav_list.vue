<template>
  <div class="bottom-nav-list"  :style="{background:backgroundColor}">
    <i class="icon icon-find"></i>
    <span>
      {{title}}
    </span>
  </div>
</template>
<script>
  export default{
      msg:'bottom-nav-list',
      props:['title','backgroundColor']
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .bottom-nav-list
    width 25%
    height 60px
    color #fff
    float left
    box-sizing border-box
    .icon
      display block
      font-size 20px
      padding-top 10px
      padding-bottom 5px
    span
      font-size 12px
</style>
