<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section class="section is-vertical is-centered">
      <div class="card" v-for="product in products">
        <div class="card-content">
          <h2 class="title">{{ product.name }}</h2>
          <ul>
            <li>{{ product.price }}</li>
            <li>{{ product.stocks }}</li>
          </ul>
          <a class="button is-uppercase is-primary">
            acquista
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    products() {
      return this.$store.getters["products/getItems"];
    }
  }
};
</script>
