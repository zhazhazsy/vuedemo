import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Tabbar,TabbarItem,Swipe,SwipeItem,List,Divider,Popup, Cell, CellGroup,Overlay,Field,Dialog,
DatetimePicker,IndexBar,IndexAnchor,SwipeCell,ContactCard, ContactList, ContactEdit,Search,NoticeBar,
 PullRefresh} from 'vant';
import axios from 'axios';
import utils from './utils';   //获取url参数
import moment from 'moment';


Vue.prototype.$moment = moment
Vue.prototype.$utils = utils;   //注册全局方法
Vue.prototype.axios = axios;
Vue.use(IndexBar);
Vue.use(PullRefresh);
Vue.use(Search);
Vue.use(NoticeBar);
Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);
Vue.use(SwipeCell);
Vue.use(IndexAnchor);
Vue.use(Tabbar);
Vue.use(DatetimePicker);
Vue.use(Field);
Vue.use(Dialog);
Vue.use(Overlay);
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
