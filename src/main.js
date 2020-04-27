import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Tabbar,TabbarItem,Swipe,SwipeItem,List,Divider,Popup, Cell, CellGroup } from 'vant';
import axios from 'axios';
import utils from './utils';   //获取url参数
 
Vue.prototype.$utils = utils;   //注册全局方法
Vue.prototype.axios = axios;
Vue.use(Tabbar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Divider);
Vue.use(List);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
