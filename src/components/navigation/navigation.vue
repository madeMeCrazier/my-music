<template>
  <div class="navigation">
    <div class="navigation-warpper">
      <v-nav-list></v-nav-list>
      <v-nav-list></v-nav-list>
      <v-nav-list></v-nav-list>
      <v-nav-list></v-nav-list>
      <!--<div class="navigation-list" style="background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);">-->
        <!--<i class="icon icon-find"></i>-->
        <!--<span>-->
          <!--发现-->
        <!--</span>-->
      <!--</div>-->
      <!--<div class="navigation-list" style="background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);">-->
        <!--<i class="icon icon-headset"></i>-->
        <!--<span>-->
          <!--我的音乐-->
        <!--</span>-->
      <!--</div>-->
      <!--<div class="navigation-list" style="background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);">-->
        <!--<i class="icon icon-dynamic-more"></i>-->
        <!--<span>-->
          <!--动态-->
        <!--</span>-->
      <!--</div>-->
      <!--<div class="navigation-list" style="background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);">-->
        <!--<i class="icon icon-Block"></i>-->
        <!--<span>-->
          <!--帐号-->
        <!--</span>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  import nav_list from './../navigation_list/navigation_list.vue'
  export default{
    msg:'this is a navigation-list',
    data(){
      return {}
    },
    components:{
        'v-nav-list':nav_list
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .navigation
    position fixed
    width 100%
    height 60px
    bottom 0
    left 0
    box-sizing border-box
    .navigation-warpper
      width 100%
      height 60px
</style>
