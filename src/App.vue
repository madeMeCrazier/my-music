<!--那年雨季-->
<!--项目地址：https://github.com/madeMeCrazier/my-music.git-->
<template>
  <div id="app">
    <audio id="myaudio" src=""></audio>

    <v-main-button></v-main-button>
    <v-navigation></v-navigation>
  </div>
</template>

<script>
  import main_button from './components/main_button/main_button.vue'
  import navigation from './components/navigation/navigation.vue'
  export default {
    name: 'app',
    components:{
      'v-main-button':main_button,
      'v-navigation':navigation
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "/static/font-icon/style.css"
  @import "common/stylus/border-1px/index.styl"
  @import "common/stylus/global.styl"
  @import "common/stylus/util.styl"
  body,html
    margin:0
    padding:0
    box-sizing:border-box
    background: #f0f0f0
    user-select:none
    -webkit-tap-highlight-color :transparent

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color #2c3e50
    text-align center
</style>
