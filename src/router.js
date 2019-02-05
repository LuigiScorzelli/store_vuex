import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ProductsCreate from "./views/adminProducts/create";
import AdminIndex from "./views/adminProducts/index";
import AdminUpdate from "./views/adminProducts/_id/update";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin/products/create",
      name: "productsCreate",
      component: ProductsCreate
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "adminIndex",
      component: AdminIndex
    },
    {
      path: "/admin/:id/update",
      name: "adminUpdate",
      component: AdminUpdate
    }
  ]
});

const noAuthPages = ["/login"];

router.beforeEach( (to, from, next) =>{
  let auth = store.getters["accounts/getAuth"];
  let redirectUrl = null;
  if (auth === null && !noAuthPages.includes(to.path)) {
    redirectUrl = "/login";
  } else if (auth != null && noAuthPages.includes(to.path)) {
    //redirectUrl = "productsCreate";
    redirectUrl = "adminIndex";
  }

  if ( redirectUrl != null ) {
    next(redirectUrl);
  } else {
    next();
  }
});

export default router;

