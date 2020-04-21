import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import a1 from '@/components/a1'
import a2 from '@/components/a2'
import a3 from '@/components/a3'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/kk', component: Hello},
    {path: '/a1', component: a1},
    {path: '/a2', component: a2},
    {path: '/a3', component: a3},
  ]
})
