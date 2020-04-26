import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Tabbar,TabbarItem,Swipe,SwipeItem,List,Divider } from 'vant';
import axios from 'axios';

Vue.prototype.axios = axios;
Vue.use(Tabbar);
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
