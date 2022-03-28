import Vue from 'vue';
// thêm element ui vào ứng dụng
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import i18n from './i18n'
// thêm flag icon
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)
// thêm router vào ứng dụng
import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
