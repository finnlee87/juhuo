import Vue from 'vue'
import Router from 'vue-router'
import Stock from '@/components/Stock'
import Ship from '@/components/Ship'
import Cash from '@/components/Cash'
import Account from '@/components/Account'
import GoodsDetail from '@/components/goods/GoodsDetail'
import SendGoods from '@/components/goods/SendGoods'
import AddGoods from '@/components/goods/AddGoods'
import GoodsList from '@/components/goods/GoodsList'

import ShipDetail from '@/components/ship/ShipDetail'


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/stock',
  	},
    {
      path: '/stock',
      component: Stock
    },
    {
      path: '/goods/list',
      component: GoodsList
    },
    {
      path: '/goods/:id/detail',
      component: GoodsDetail
    },
    {
        path: '/goods/:id/send',
        component: SendGoods
    },
    {
        path: '/goods/add',
        component : AddGoods
    },
    {
        path : '/ship',
        component : Ship
    },
    {
        path : '/ship/:id/detail',
        component : ShipDetail
    },
    {
        path : '/cash',
        component : Cash
    },
    {
        path : '/account',
        component : Account
    }   
  ]
})
