<template>
  <div class="bottom-nav">
    <div class="bottom-nav-warpper">
      <v-nav-list title="发现" background-color="linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"></v-nav-list>
      <v-nav-list title="我的音乐" background-color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"></v-nav-list>
      <v-nav-list title="动态" background-color="linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)"></v-nav-list>
      <v-nav-list title="帐号" background-color="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"></v-nav-list>
    </div>
  </div>
</template>
<script>
  import nav_list from './../bottom_nav_list/bottom_nav_list.vue'
  export default{
    msg:'bottom-nav',
    data(){
      return {}
    },
    components:{
        'v-nav-list':nav_list
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .bottom-nav
    position fixed
    width 100%
    height 60px
    bottom 0
    left 0
    box-sizing border-box
    .bottom-nav-warpper
      width 100%
      height 60px
</style>
