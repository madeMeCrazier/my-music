<template>
  <div class="people">
    <img :src="imageUrl" alt="">
    <p>{{name}}</p>
  </div>
</template>
<script>
  export default{
      props:['imageUrl','name'],
      data(){
          return{

        }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .people
    width 1.5rem
    height 1.5rem
    text-align center
    float left
    img
      width 1rem
      height 1rem
      border-radius 50%
      margin-top 0.1rem
    p
      font-size 0.22rem
      margin-top 0.1rem
</style>
