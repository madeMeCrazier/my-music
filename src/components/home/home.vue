<template>
  <div class="home">
    <v-header
      title="我的音乐"
      iconLeftLink="http://www.qq.com"
      iconLeftType="icon-sousuo"
      iconRightType="icon-lingdang"
      iconRightLink="http://www.qq.com"
    ></v-header>
    <swiper id="home-swiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="./../../assets/24.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../assets/19.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../assets/21.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="home-bar">
      <v-nav-list title="猜你喜欢" iconType="icon-star-empty"></v-nav-list>
      <v-nav-list title="歌单" iconType="icon-music-list"></v-nav-list>
      <v-nav-list title="排行榜" iconType="icon-ranking"></v-nav-list>
      <v-nav-list title="电台" iconType="icon-coffee"></v-nav-list>
      <v-nav-list title="MV" iconType="icon-mv"></v-nav-list>
    </div>
    <div class="card-warpper">
      <v-card url="static/image/promo_01.jpg" type="card1" text="每日推荐"></v-card>
      <v-card url="static/image/skins_10.jpg" type="card1" text="听见不同"></v-card>
      <v-card url="static/image/sr_01.jpg" type="card1" text="随心~听"></v-card>
    </div>
  </div>
</template>

<script>
  import header from './../header/header.vue'
  import nav_list from './../bottom_nav_list/bottom_nav_list.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import card from './../card/card.vue'
  export default{
    components:{
      'v-header':header,
      'v-nav-list':nav_list,
      'v-card':card,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 1000,
          loop:true,
//        effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true,
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
      console.log('mounted');
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #home-swiper
    width 100%
    height 3rem
    overflow hidden
  .home-bar
    width 100%
    height 1.4rem
    padding 0.2rem 0
    background #f6f9f6
  .card-warpper
    display flex
</style>

