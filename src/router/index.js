import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import music from '@/components/music/music'
import dynamic from '@/components/dynamic/dynamic'
import my from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/music',
      name: 'music',
      component: music
    },{
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },{
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
