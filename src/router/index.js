import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Film from '@/components/film/film'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/home',name: 'home',component: Home},
    {path: '/film',name: 'film',component: Film}
  ]
})
