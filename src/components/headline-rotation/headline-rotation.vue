<template>
  <div class="headline">
    <img :src="url" alt="">
    <h1 class="headline-title">
      <span class="toutiao">头条</span>
      {{title}}
      <span class="headline-description">
        {{description}}
      </span>
    </h1>
    <span class="icon icon-play-light" >

    </span>
  </div>
</template>
<script>
  export default{
      props:['url','title','description'],
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .headline
    width 100%
    height 1.2rem
    background #ffffff
    overflow hidden
    font-size 0.3rem
    position relative
    img
      width 1.5rem
      position absolute
      left 0.1rem
      top 0.15rem
    .headline-title
      width 5rem
      height 0.8rem
      overflow hidden
      font-size 0.3rem
      font-weight bold
      text-align left
      margin-left 1.8rem
      line-height 0.3rem
      margin-top 0.2rem
      line-height 0.4rem
      .toutiao
        color #ffffff
        background #000000
        font-size 0.18rem
        padding 0rem 0.1rem
        margin-right 0.2rem
    .headline-description
      font-size 0.25rem
      color #999999
      text-align left
      text-indent 1.8rem
      margin-top 0.2rem
    .icon
      font-size 0.5rem
      position absolute
      right 0.2rem
      top 0.3rem
</style>
