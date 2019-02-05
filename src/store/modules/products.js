import Product from "../../assets/models/Product";

export default {
  namespaced: true,
  state: {
    items: [
      new Product(1, {
        name: "notebook",
        price: 200,
        category: "informatica",
        stocks: 10
      })
    ]
  },
  actions: {
    async create(context, product) {
      context.commit("pushItem", product);
    },
    async update(context, product) {
      let foundIndex = context.getters.findIndex(product._id);
      if (foundIndex !== -1) {
        context.commit("update", {product, index: foundIndex});
      }
    }
  },
  mutations: {
    pushItem(state, item) {
      state.items.push(item);
    },
    update(state, {product, index}) {
      state.items[index] = product;
    }
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    findItem: state => id =>  {
      return state.items.find(item => {
        return item._id === id;
      });
    },
    lastItemId(state) {
      let checkId = null;
      if(state.items.length > 0) {
        let itemsLength = state.items.length - 1;
        checkId = state.items[itemsLength]._id;
      }
      return checkId;
    },
    findIndex: state => id => {
      return state.items.find(item => {
        return item.id === id;
      });
    }
  }
}