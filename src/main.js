import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Tabbar,TabbarItem,Swipe,SwipeItem,List,Divider,Popup, Cell, CellGroup,Overlay,Field,Dialog,
DatetimePicker,IndexBar,IndexAnchor,SwipeCell,ContactCard, ContactList, ContactEdit,Search,NoticeBar,
 PullRefresh,DropdownMenu, DropdownItem,Collapse, CollapseItem,NavBar,Loading,ActionSheet,Lazyload,
  Tab,Tabs} from 'vant';
import axios from 'axios';
import utils from './utils';   //获取url参数
import moment from 'moment';




Vue.prototype.$moment = moment
Vue.prototype.$utils = utils;   //注册全局方法
Vue.prototype.axios = axios;
Vue.use(ActionSheet);
Vue.use(IndexBar);
Vue.use(PullRefresh);
Vue.use(Search);
Vue.use(NoticeBar);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
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
Vue.use(Loading);
Vue.use(Lazyload);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
