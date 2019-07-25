import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoPage from '@/components/TodoPage'
import FilterableProductTable from '@/components/FilterableProductTable/FilterableProductTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/FilterableProductTable',
      name: 'FilterableProductTable',
      component: FilterableProductTable
    }
  ]
})
