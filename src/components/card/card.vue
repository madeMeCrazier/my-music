<template>
  <div class="card" :class="type">
    <img :src="url" alt="">
    <p class="text"><span>{{text}}</span></p>
  </div>
</template>

<script>
  export default{
    props:['url','type','text'],
    data(){
      return{

      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .card1
    width 2.4rem
    height 2.4rem
    overflow hidden
    margin 0.07rem
    margin-right 0
    position relative
    .text
      position absolute
      width 100%
      height 0.5rem
      line-height 0.55rem
      bottom 0
      left 0
      font-size 0.25rem
      color #ffffff
      background rgba(0,0,0,0.6)
  .card2
    width 2.5rem
    height 3.5rem
    overflow hidden
    position relative
    background #eeeeee
    .text
      height 0.8rem
      padding 0.1rem
      overflow hidden
      position static
      text-align center
      line-height 0.4rem
      color #000000
      font-size 0.25rem
      font-weight 300
  .card3
    width 2.5rem
    height 2.5rem
    overflow hidden
    position relative
    background #eeeeee
    .text
      width 2.5rem
      height 2.5rem
      line-height 2.5rem
      text-align center
      position absolute
      top 0rem
      left 0rem
      font-size 0.25rem
      font-weight 300
      span
        background #000000
        color #ffffff
        padding 0.1rem
</style>
