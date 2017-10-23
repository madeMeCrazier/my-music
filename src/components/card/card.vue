<template>
  <div class="card" :class="type">
    <img :src="url" alt="">
    <p class="text">{{text}}</p>
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
</style>
