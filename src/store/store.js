import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import accounts from "./modules/accounts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    accounts
  }
});
