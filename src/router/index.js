import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Location from "../views/Location.vue";
import Clockcomplete from "../components/clockcomplete.vue"
import contacts from "../views/contacts.vue"
import Setting from "../views/Setting.vue"
import Admin from "../views/Admin.vue"
import Arrange from "../components/Arrange.vue"
import Loading from "../components/Loading.vue"
import AdminError from "../components/AdminError.vue"
import Viewtasks from "../components/Viewtasks.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Clockcomplete",
    name: "Clockcomplete",
    component: Clockcomplete
  },
  {
    path: "/Viewtasks",
    name: "Viewtasks",
    component: Viewtasks
  },
  {
    path: "/AdminError",
    name: "AdminError",
    component: AdminError
  },
  {
    path: "/Loading",
    name: "Loading",
    component: Loading
  },
  {
    path: "/Arrange",
    name: "Arrange",
    component: Arrange
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/Setting",
    name: "Setting",
    component: Setting
  },
  {
    path: "/contacts",
    name: "contacts",
    component: contacts
  },
  {
	path: "/location",
	name: "Location",
	component: Location
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

