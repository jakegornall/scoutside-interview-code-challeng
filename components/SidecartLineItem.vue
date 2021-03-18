<template lang="pug">
  .sidecart-line-item
    h2.sidecart-line-item__title {{ product.title }}
    p.sidecart-line-item__price {{ product.price | money }}
    p.sidecart-line-item__qty Qty: {{ product.qty }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({
        title: String,
        price: Number,
        qty: Number,
      }),
    },
  },
}
</script>

<style lang="scss">
.sidecart-line-item {
  border-bottom: 1px solid black;
  padding: 15px;
}
</style>
