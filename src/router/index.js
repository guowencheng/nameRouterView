import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import header from '@/components/header'
import menu from '@/components/menu'
import content from '@/components/content'
import list from '@/components/list'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/menu'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: 'menu',
        name: 'menu',
        components: {
          header: header,
          menu: menu,
          content: content
        },
        children: [
          {
            path: 'list/:index',
            name: 'list',
            // content: list,
            components: {
              contentList:list
            },
          },
          {
            path: 'list/:index/detail/:detailIndex',
            name: 'detail',
            // component:detail,
            components:{
              contentList:detail
            }
          },
          {
            path: 'list/:index/detailH/:detailIndex',
            name: 'detailH',
            // component:detail,
            components:{
              headerDetail:detail,
              contentList:detail
            }
          }
        ]
      }]
    },
    {
      path: '/detailNoMenu',
      name: 'detailNoMenu',
      component: detail
    }
  ]
})
