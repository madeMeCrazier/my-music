<!--那年雨季-->
<!--项目地址：https://github.com/madeMeCrazier/my-music.git-->
<template>
  <div id="app">
    <audio id="myaudio" src=""></audio>
    <router-view></router-view>
    <v-main-button></v-main-button>
    <v-navigation></v-navigation>
  </div>
</template>

<script>
  import main_button from './components/main_button/main_button.vue'
  import navigation from './components/bottom_nav/bottom_nav.vue'
  import home from './components/home/home.vue'
  export default {
    name: 'app',
    components:{
      'v-main-button':main_button,
      'v-navigation':navigation,
      'v-home':home
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "/static/font-icon/style.css"
  @import "common/stylus/border-1px/index.styl"
  @import "common/stylus/global.styl"
  @import "common/stylus/util.styl"
  @import "common/swiper.min.css"
  body,html
    margin:0
    padding:0
    padding-bottom 1.2rem
    box-sizing:border-box
    background: #f0f0f0
    user-select:none
    -webkit-tap-highlight-color :transparent
    background #eeeeee
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color #2c3e50
    font-size 0.3rem
</style>
