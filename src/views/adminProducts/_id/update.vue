<template>
  <div>
    <section class="section is-fullheight">
      <div class="container">
        <div class="columns is-vertical is-centered">
          <div class="column card is-half">
            <section>
              <b-select>
                <option v-for="category in productCategories">{{
                  category
                }}</option>
              </b-select>
              <b-field label="name">
                <b-input type="text" v-model="product.name"></b-input>
              </b-field>
              <b-field label="prezzo">
                <b-input type="number" v-model="product.price"></b-input>
              </b-field>
              <b-field label="quantità">
                <b-input type="number" v-model="product.stocks"></b-input>
              </b-field>
              <a class="button" @click="updateProduct">
                Save
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BSelect from "buefy/src/components/select/Select";
import BField from "buefy/src/components/field/Field";
import BInput from "buefy/src/components/input/Input";
import Product from "../../../assets/models/Product";

export default {
  components: { BInput, BField, BSelect },
  data() {
    return {
      productCategories: []
    };
  },
  created() {
    for (let categoryKey of Object.keys(Product.Category)) {
      this.productCategories.push(Product.Category[categoryKey]);
    }
  },
  computed: {
    product() {
      let toRet = null;
      if (this.productId) {
        toRet = this.$store.getters["products/findItem"](
          parseInt(this.productId)
        );
      }
      return toRet;
    },
    productId() {
      return this.$route.params.id;
    }
  },
  methods: {
    async updateProduct() {
      await this.$store.dispatch("products/update", this.product);
      this.redirect();
    },
    redirect() {
      this.$router.push({ name: "adminIndex" });
    }
  }
};
</script>
