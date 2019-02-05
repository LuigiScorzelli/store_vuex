<template>
  <div>
    <h1 class="title">Inserisci un nuovo prodotto</h1>
    <section class="section is-fullheight">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div class="column card is-half">
            <b-field>
              <b-select v-model="product.category" label="Category">
                <option v-for="category in productCategories">{{ category }}</option>
              </b-select>
            </b-field>
            <b-field label="name">
              <b-input v-model="product.name" type="text" minlength="3"></b-input>
            </b-field>
            <b-field label="price">
              <b-input v-model="product.price" type="number"></b-input>
            </b-field>
            <b-field label="stocks">
              <b-input v-model="product.stocks" type="number"></b-input>
            </b-field>
            <a class="button is-primary" @click="createProduct()">
              Save
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Product from "../../assets/models/Product";

export default {
  name: "productsCreate",
  data() {
    return {
      product: new Product(1,{}),
      productCategories: []
    };
  },
  created() {
    for (let categoryKey of Object.keys(Product.Category)) {
      this.productCategories.push(Product.Category[categoryKey]);
    }
    let lastId = this.$store.getters["products/lastItemId"];
    this.product._id = lastId + 1;
  },
  methods: {
    async createProduct() {
      await this.$store.dispatch("products/create", this.product);
      this.redirect();
    },
    redirect() {
      this.$router.push({ name: "adminIndex" });
    }
  }
};
</script>