// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'    // 默认主题

import axios from 'axios'
axios.defaults.headers.post['Content-Type']='application/json';
Vue.prototype.$axios = axios;

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
