<template>
  <div class="songline">
    <img :src="url" alt="">
    <p class="song-name">
      {{songName}}
    </p>
    <p class="singer">
      {{singer}}
    </p>
    <span class="icon icon-mv"></span>
    <span class="icon-move">
      ...
    </span>
  </div>
</template>
<script>
  export default{
    props:['url','songName','singer'],
    data(){
        return{

        }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .songline
    width 100%
    height 1.2rem
    position relative
    img
      width 1.2rem
      height 1.2rem
      position absolute
      left 0.2rem
      top 0
    p
      margin-left 1.7rem
      height 0.6rem
      width 4.5rem
      line-height 0.6rem
    .song-name
      color #000000
    .singer
      color #999
      font-size 0.25rem
    .icon
      position absolute
      right 1rem
      top 0.4rem
      font-size 0.4rem
    .icon-move
      position absolute
      right 0.2rem
      top 0.05rem
      font-size 0.6rem
      color #999
</style>
