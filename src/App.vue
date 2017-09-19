<!--那年雨季-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "/static/font-icon/style.css"
  @import "common/stylus/border-1px/index.styl"
  @import "common/stylus/global.styl"
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
