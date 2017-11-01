<template>
  <div id="music">
    <v-header
      title="全部动态"
      iconLeftLink="http://www.qq.com"
      iconLeftType="icon-sousuo"
      iconRightType="icon-lingdang"
      iconRightLink="http://www.qq.com"
      background="background-image: linear-gradient(to right, #d299c2 0%, #fef9d7 100%);"
    ></v-header>
    <div class="attention-bar">
      <div class="bar-box active">
        全部
      </div>
      <div class="bar-box">
        关注
      </div>
    </div>
    <div class="people-warpper">
      <div class="scroll-box">
        <v-people imageUrl="static/image/promo_01.jpg" name="吴亦凡"></v-people>
        <v-people imageUrl="static/image/20.jpg" name="周杰伦"></v-people>
        <v-people imageUrl="static/image/b02.jpg" name="林俊杰"></v-people>
        <v-people imageUrl="static/image/4.jpg" name="朴信惠"></v-people>
        <v-people imageUrl="static/image/3.jpg" name="新垣结衣"></v-people>
        <v-people imageUrl="static/image/promo_05.jpg" name="疾风剑豪"></v-people>
        <v-people imageUrl="static/image/skins_02.jpg" name="暴走萝莉"></v-people>
        <v-people imageUrl="static/image/skins_10.jpg" name="无双剑姬"></v-people>
        <v-people imageUrl="static/image/9.jpg" name="紫霞"></v-people>
        <v-people imageUrl="static/image/sr_01.jpg" name="至高之拳"></v-people>
      </div>
    </div>
    <div class="recommend-topic">
      <h1 class="box-title">推荐话题<span class="replace-onther">换一批</span></h1>
      <div class="topic-warpper">
        <div class="scroll-box">
          <v-topic-card imageUrl="static/image/b01.jpg" title="一座城一首歌" count="168"></v-topic-card>
          <v-topic-card imageUrl="static/image/24.jpg" title="那些曾经追过的梦想" count="1647"></v-topic-card>
          <v-topic-card imageUrl="static/image/28.jpg" title="心情低落时你听的歌" count="1346"></v-topic-card>
          <v-topic-card imageUrl="static/image/30.jpg" title="夏至未至" count="1346"></v-topic-card>
          <v-topic-card imageUrl="static/image/26.jpg" title="从开始到最后" count="1346"></v-topic-card>
          <v-topic-card imageUrl="static/image/25.jpg" title="越过山丘" count="1346"></v-topic-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import header from './../header/header.vue'
  import people from './../people/people.vue'
  import topic_card from './../topic_card/topic_card.vue'
  export default{
    components:{
      'v-header':header,
      'v-people':people,
      'v-topic-card':topic_card
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .attention-bar
    display flex
    background #ffffff
    .bar-box
      width 3.75rem
      text-align center
      height 0.8rem
      line-height 0.8rem
    .active
      color orangered
      border-bottom 1px solid orangered
  .people-warpper
    background #ffffff
    height 1.7rem
    margin-top 0.1rem
    overflow-x scroll
    .scroll-box
      width 150%
      display flex
    .people
      flex-shrink 0
  .recommend-topic
    margin-top 0.1rem
    .topic-warpper
      background #ffffff
      overflow-x scroll
      padding-bottom 0.2rem
      .scroll-box
        display flex
      .topic-card
        flex-shrink 0
</style>
