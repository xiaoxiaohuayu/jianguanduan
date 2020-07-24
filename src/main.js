import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
import {post,get} from './Network/http'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import dictCode from './utils/code.js'
dictCode._getDictCode()
Vue.use(Antd)


// 路径问题   ./ 定位到根目录下了

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
