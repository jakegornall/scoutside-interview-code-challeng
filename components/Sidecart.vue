<template lang="pug">
  .sidecart(:class="sidecartClasses")
    .sidecart__overlay(@click="$store.dispatch('cart/close')")
    transition(name="slide-right" mode="out-in")
      .sidecart__drawer(v-if="isOpen")
        button.sidecart__close-button(
          @click="$store.dispatch('cart/close')"
        ) Close Cart
        .sidecart__line-items
          sidecart-line-item(
            v-for="(product, index) in lineItems"
            :key="`${product.title}__${index}`"
            :product="product"
          )
        p.sidecart__total Total: {{ subtotal | money }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      lineItems: (state) => state.cart.lineItems,
      subtotal: (state) => state.cart.subtotal,
      isOpen: (state) => state.cart.isOpen,
    }),
    sidecartClasses() {
      return {
        'sidecart--is-open': this.isOpen,
      }
    },
  },
}
</script>

<style lang="scss">
.sidecart__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: black;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s;

  .sidecart--is-open & {
    opacity: 0.5;
    visibility: visible;
  }
}

.sidecart__close-button {
  width: 100%;
  padding: 15px;
}

.sidecart__drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: white;
  width: 500px;
}

.sidecart__total {
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
}
</style>
