import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '../views/GoodsList'
import Title from '../views/Title'
import Image from '../views/Image'
import cart from '../views/Cart'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //mode:'hash', //浏览路径加上#
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      components: {
        default:GoodsList,
        Title:Title,
        Image:Image
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    }
  ]
})
