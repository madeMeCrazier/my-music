<template>
  <div class="icon-card">
    <span class="icon" :class="icon"></span>
    <p>{{title}}</p>
  </div>
</template>
<script>
  export default{
      props:['title','icon'],
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .icon-card
    height 1.5rem
    text-align center
    background #ffffff
    padding-top 0.3rem
    .icon
      font-size 0.5rem
    p
      font-size 0.25rem
      padding-top 0.2rem

</style>
