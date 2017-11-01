<template>
  <div class="songList-card" :class="type">
    <img :src="imageUrl" alt="">
    <span class="icon-play-light"></span>
    <p class="card-name">{{title}}</p>
    <p class="song-count">{{songCount}}首</p>
  </div>
</template>
<script>
  export default{
      props:['imageUrl','title','songCount','type'],
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
    margin-bottom 0.2rem
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
      font-size 0.28rem
    .song-count
      padding-left 0.1rem
      font-size 0.25rem
      padding-top 0.1rem
      color #999999
  .songList-card2
    .card-name
      text-align center
      padding-left 0
      font-size 0.28rem
    .song-count
      display none
</style>
