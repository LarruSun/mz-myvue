// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//导入网络组建
import axios from 'axios';
import store from './vuex/Store' //引入vuex对象
//引入px转rem
import 'lib-flexible/flexible'



Vue.config.productionTip = false;
//吧网络组建注册成全局变量
Vue.prototype.$http=axios;


Vue.config.productionTip = false
var baseApi;
if(true){
  baseApi = "http://laarsun.320.io:12604?"
}else{
  baseApi = "http://192.168.43.22:3000"
}
Vue.prototype.baseApi = baseApi;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //注入store对象
  components: { App },
  template: '<App/>'
})
