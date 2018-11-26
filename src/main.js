// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式

import { Message } from 'iview'
Vue.prototype.$Message = Message

import Cookies from 'js-cookie';
Vue.prototype.Cookies = Cookies
//引入公共加密js
var sha1 =require('./assets/js/sha1.js')
Vue.prototype.sha1 = sha1;

import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.use(iView)

Vue.config.productionTip = false

Vue.prototype.Bus = new Vue();

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  // 将store实例注入到根组件下的所有子组件中
  store,
  components: { App },
  template: '<App/>',
  created(){

  }
})
export default app
