<template lang="pug">
  .main-app
    button.main-app__atc-button(
      @click="addToCart"
    ) Add To Cart
    button.main-app__clear-button(
      @click="clearCart"
    ) Clear Cart
    sidecart
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$store.dispatch('cart/add', 123456789)
    },
    clearCart() {
      this.$store.dispatch('cart/clear')
    },
  },
}
</script>

<style lang="scss">
.main-app {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.main-app__atc-button,
.main-app__clear-button {
  padding: 30px;
}
</style>
