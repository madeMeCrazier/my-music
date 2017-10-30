<template>
  <div class="songList-card">
    <img src="/static/image/b02.jpg" alt="">
    <span class="icon-play-light"></span>
    <p class="card-name">你好世界</p>
    <p class="song-count">46首</p>
  </div>
</template>
<script>
  export default{
      props:['imageUrl','title','songCount'],
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .songList-card
    position relative
    padding-top 0.1rem
    img
      width 2.4rem
      position relative
    .icon-play-light
      position absolute
      right 0.3rem
      top 1.8rem
      color #ffffff
    .card-name
      padding-left 0.1rem
      padding-top 0.1rem
    .song-count
      padding-left 0.1rem
      font-size 0.25rem
      padding-top 0.1rem
      color #999999
</style>
