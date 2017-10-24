<template>
  <!--:style="{background:backgroundColor}"-->
  <div class="bottom-nav-list">
    <i class="icon" :class="iconType"></i>
    <p>
      {{title}}
    </p>
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
    text-align center
    position relative
    .icon
      display block
      font-size 0.35rem
      padding-top 0.2rem
      padding-bottom 0.1rem
      color #000
    p
      font-size 0.2rem
      font-weight 300
</style>
