// 引入Vue
import Vue from 'vue'
// 引入组件
import App from './App.vue'
// 引入sotre
import store from './vuex/store.js'
// 设置是否显示提示信息
Vue.config.productionTip = false
// 实例化对象
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册仓库
  store
})
