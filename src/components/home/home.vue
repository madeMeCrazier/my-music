<template>
  <div class="home">
    <v-header
      title="发现"
      iconLeftLink="http://www.qq.com"
      iconLeftType="icon-sousuo"
      iconRightType="icon-lingdang"
      iconRightLink="http://www.qq.com"
      background="background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
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
    <swiper class="rotation-warpper" :options="swiperOption2" ref="mySwiper">
      <swiper-slide class="swiper-no-swiping">
        <v-headline
          url="static/image/promo_11.jpg"
          title="Legends Never Die-2017英雄联盟全球总决赛主题曲"
          description="关于hiphop，他们有话要说"
        ></v-headline>
      </swiper-slide>
      <swiper-slide class="swiper-no-swiping">
        <v-headline
          url="static/image/promo_03.jpg"
          title="周杰伦新专《夜的第十四章》发行，来音悦抢先试听"
          description="关于hiphop，他们有话要说"
        ></v-headline>
      </swiper-slide>
      <swiper-slide>
        <v-headline
          url="static/image/promo_09.jpg"
          title="中国风说唱，hiphop助力英雄联盟s7全球总决赛"
          description="关于hiphop，他们有话要说"
        ></v-headline>
      </swiper-slide>
    </swiper>
    <div class="recommend-warpper">
      <h1 class="box-title">必听·歌单推荐 <span class="replace-onther">换一批</span></h1>
      <div class="card-box">
        <v-card url="static/image/3.jpg" type="card2" text="好听到哭的英文歌"></v-card>
        <v-card url="static/image/20.jpg" type="card2" text="前奏一秒沦陷"></v-card>
        <v-card url="static/image/b02.jpg" type="card2" text="那些年，我们追过的女孩"></v-card>
        <v-card url="static/image/4.jpg" type="card2" text="再见，就这样吧"></v-card>
        <v-card url="static/image/promo_05.jpg" type="card2" text="老板，两份炒面，一份辣，一份不辣，算了，两份都辣吧"></v-card>
        <v-card url="static/image/9.jpg" type="card2" text="你好世界，很高兴遇见你"></v-card>
      </div>
      <div class="box-footer">
        查看更多 <span class="icon-play-light"></span>
      </div>
    </div>
    <div class="recommend-warpper">
      <h1 class="box-title">新歌推荐<span class="replace-onther">换一批</span></h1>
      <v-songline url="static/image/promo_01.jpg" songName="爱在西元前" singer="周杰伦"></v-songline>
      <v-songline url="static/image/skins_10.jpg" songName="可惜没如果" singer="林俊杰"></v-songline>
      <v-songline url="static/image/b02.jpg" songName="十年" singer="陈奕迅"></v-songline>
      <div class="box-footer">
        查看更多 <span class="icon-play-light"></span>
      </div>
    </div>
    <div class="recommend-warpper">
      <h1 class="box-title">曲风流派推荐 <span class="replace-onther">换一批</span></h1>
      <div class="card-box">
        <v-card url="static/image/3.jpg" type="card3" text="国语流行"></v-card>
        <v-card url="static/image/20.jpg" type="card3" text="粤语流行"></v-card>
        <v-card url="static/image/b02.jpg" type="card3" text="流行摇滚"></v-card>
      </div>
      <div class="box-footer">
        查看更多 <span class="icon-play-light"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import header from './../header/header.vue'
  import nav_list from './../bottom_nav_list/bottom_nav_list.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import card from './../card/card.vue'
  import headlineRotation from './../headline-rotation/headline-rotation.vue'
  import songline from './../songline/songline.vue'
  export default{
    components:{
      'v-header':header,
      'v-nav-list':nav_list,
      'v-card':card,
      'v-headline':headlineRotation,
      'v-songline':songline,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 1500,
          loop:true,
//        effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true,
        },swiperOption2: {
          notNextTick: true,
          direction:'vertical',
          autoplay: 2500,
          loop:true,
          grabCursor : true,
          setWrapperSize :true,
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
  .box-title
    height 1.2rem
    line-height 1.2rem
    font-size 0.3rem
    padding-left 0.3rem
    .replace-onther
      font-size 0.25rem
      float right
      margin-right 0.3rem
      color #999999
  .box-footer
    height 0.8rem
    text-align center
    line-height 0.8rem
    font-size 0.25rem
    .icon-play-light
      font-size 0.32rem
      position relative
      top 0.03rem
  .home
    font-size 0.3rem
    margin-top 0.9rem
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
    .rotation-warpper
      width 100%
      height 1.2rem
      overflow hidden
      margin-top 0.1rem
    .recommend-warpper
      margin-top 0.2rem
      background #fbfbfb
      .card-box
        display flex
        flex-wrap wrap
</style>

