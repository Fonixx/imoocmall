import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '../views/GoodsList'
import Title from '../views/Title'
import Image from '../views/Image'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //mode:'hash', //浏览路径加上#
  mode:'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          path: 'title',
          name: 'title',
          component: Title
        }
        , {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    }
  ]
})
