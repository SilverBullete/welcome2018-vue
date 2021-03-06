import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'
//import demo1 from '@/components/demo1.vue'

import login from '@/components/login.vue'      //登录页
import result1 from '@/components/result1.vue'  //学号班级
import result2 from '@/components/result2.vue'  //寝室

Vue.use(Router)

export default new Router({
  routes: [

    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },*/
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/result1',
      name: 'result1',
      component: result1
    },
    {
      path: '/result2',
      name: 'result2',
      component: result2
    }
  ]
})
