import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VideoForm from '@/components/VideoForm'
import DemoForm from '@/components/DemoForm'
import WatchChannel from '@/components/WatchChannel'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/video-demo',
      name: 'VideoForm',
      component: VideoForm
    },
    {
      path: '/form-demo',
      name: 'DemoForm',
      component: DemoForm
    },
    {
      path: '/channel',
      name: 'WatchChannel',
      component: WatchChannel
    }
  ]
})
