import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '../views/GoodsList'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //mode:'hash', //浏览路径加上#
  mode:'history',
  routes: [
    {
      path: '/goods/:goodsId/user/:name',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
