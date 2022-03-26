import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import TestRouter1 from '../components/test-router1/test-router1.vue'
import CrudVue from '@/components/crud-vue/crud-vue.vue'

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
  {
    path: '/Trang/test', ///path của route
    name: 'TestRouter1', // tên route
    component: TestRouter1 // component route sử dụng
  },
  {
    path: '/Trang/chu',
    name: 'Home',
    component: CrudVue // component route sử dụng
  }
  ],
  
})