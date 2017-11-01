<template>
  <div id="music">
    <v-header
      title="我的音悦"
      iconLeftLink="http://www.qq.com"
      iconLeftType="icon-sousuo"
      iconRightType="icon-lingdang"
      iconRightLink="http://www.qq.com"
      background="background-image: linear-gradient(to left, #feada6 0%, #fef9d7 100%);"
    ></v-header>
    <div class="music-list-1">
      <div class="music-introduction-box">
        <div class="img-cover-box">
          <img src="/static/image/promo_01.jpg" alt="">
        </div>
        <p class="title">本地歌曲</p>
        <p class="song-count">366首</p>
        <span class="icon icon-play-light"></span>
      </div>
      <div class="music-introduction-box">
        <div class="img-cover-box">
          <img src="/static/image/20.jpg" alt="">
        </div>
        <p class="title">最近播放</p>
        <p class="song-count">19首</p>
        <span class="icon icon-play-light"></span>
      </div>
    </div>
    <div class="collection">
      <p class="title">我的收藏</p>
      <p class="message">歌曲,专辑,歌手等...</p>
      <img src="/static/image/3.jpg" alt="">
    </div>
    <div class="icon-card-list">
      <icon-card title="私人电台" icon="icon-star-empty"></icon-card>
      <icon-card title="已购音乐" icon="icon-music-list"></icon-card>
      <icon-card title="离线音乐包" icon="icon-ranking"></icon-card>
    </div>
    <div class="songList-created">
      <div class="title">创建的歌单</div>
      <div class="songList-warpper">
        <songList-card imageUrl="/static/image/promo_01.jpg" title="迷幻的电子音悦" songCount="30"></songList-card>
        <songList-card imageUrl="/static/image/b02.jpg" title="别听这些歌，情绪会泛滥" songCount="30"></songList-card>
        <songList-card imageUrl="/static/image/skins_10.jpg" title="一个人没有过去的人，怎么会有将来" songCount="30"></songList-card>
        <songList-card imageUrl="/static/image/promo_10.jpg" title="你好世界" songCount="30"></songList-card>
        <songList-card imageUrl="/static/image/promo_05.jpg" title="你好世界" songCount="30"></songList-card>
      </div>
    </div>
    <div class="songList-like">
      <div class="title">可能喜欢的歌单</div>
      <div class="songList-warpper">
        <songList-card imageUrl="/static/image/b02.jpg" title="你好世界" songCount="30" type="songList-card2"></songList-card>
      </div>
      <div class="box-footer">
        发现更多精彩<span class="icon-play-light"></span>
      </div>
    </div>
  </div>
</template>
<script>
  import header from './../header/header.vue'
  import icon_card from './../icon_card/icon_card.vue'
  import songList_card from './../songList_card/songList_card.vue'
  export default{
      components:{
        'v-header':header,
        'icon-card':icon_card,
        'songList-card':songList_card
      },
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  #music
    padding-top 0.9rem
    .music-list-1
      margin-top 0.1rem
      padding-top 0.2rem
      display flex
      background #ffffff
      .music-introduction-box
        width 50%
        height 1.5rem
        overflow hidden
        position relative
        .title
          margin-left 1.6rem
          margin-top 0.3rem
          font-size 0.28rem
        .song-count
          margin-left 1.6rem
          margin-top 0.1rem
          font-size 0.22rem
          color #999999
        .icon
          position absolute
          top 0.4rem
          right 0.3rem
        .img-cover-box
          img
            width 1.2rem
            height 1.2rem
            position absolute
            top 0.05rem
            left 0.1rem
            z-index 10
        .img-cover-box::before
          width 1.2rem
          height 1.2rem
          position absolute
          top 0.1rem
          left 0.15rem
          background #999999
          content ''
          z-index 9
        .img-cover-box::after
          width 1.2rem
          height 1.2rem
          position absolute
          top 0.15rem
          left 0.2rem
          background #cccccc
          content ''
          z-index 8
    .collection
      width 100%
      height 1.4rem
      overflow hidden
      position relative
      background-image linear-gradient(to left, #feada6 0%, #f5efef 100%)
      .title
        margin-left 0.2rem
        margin-top 0.4rem
        font-size 0.28rem
      .message
        margin-left 0.2rem
        margin-top 0.1rem
        font-size 0.2rem
        color #999999
      img
        width 1rem
        height 1rem
        position absolute
        right 0.5rem
        top 0.2rem
    .icon-card-list
        display flex
        .icon-card
          width 2.5rem
    .songList-created
      margin-top 0.2rem
      background #f1f1f1
      .title
        height 0.8rem
        background #ffffff
        line-height 0.8rem
        padding-left 0.2rem
    .songList-like
      margin-top 0.1rem
      background #f1f1f1
      .title
        height 0.8rem
        background #ffffff
        line-height 0.8rem
        padding-left 0.2rem
    .songList-warpper
      display flex
      flex-wrap wrap
      .songList-card
        width 2.4rem
        margin-left 0.075rem
</style>
