import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Location from "../views/Location.vue";
import Clockcomplete from "../components/clockcomplete.vue"
import contacts from "../views/contacts.vue"
import Setting from "../views/Setting.vue"

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

