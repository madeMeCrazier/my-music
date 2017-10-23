<template>
  <div class="bottom-nav">
    <div class="bottom-nav-warpper">
      <div>
        <v-nav-list title="发现" iconType="icon-find"></v-nav-list>
        <v-nav-list title="我的音乐" iconType="icon-headset"></v-nav-list>
      </div>
      <div>
        <v-nav-list title="动态" iconType="icon-sleepy"></v-nav-list>
        <v-nav-list title="帐号" iconType="icon-Block"></v-nav-list>
      </div>
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
    bottom 0
    left 0
    box-sizing border-box
    background #ffffff
    .bottom-nav-warpper
      width 100%
      display flex
      justify-content space-between
</style>
