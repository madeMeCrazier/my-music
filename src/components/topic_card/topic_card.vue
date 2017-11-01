<template>
  <div class="topic-card">
    <img :src="imageUrl" alt="">
    <p class="topic-title">{{title}}</p>
    <p class="topic-count">{{count}}条动态</p>
  </div>
</template>
<script>
  export default{
      props:['imageUrl','title','count'],
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .topic-card
    width 3.5rem
    img
      width 3.5rem
      height 2.5rem
    .topic-title
      padding-left 0.2rem
      font-size 0.28rem
      line-height 0.35rem
    .topic-count
      font-size 0.25rem
      padding-left 0.2rem
      padding-top 0.2rem
      color #cccccc
</style>
