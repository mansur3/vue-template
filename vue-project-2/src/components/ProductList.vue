<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductListStore } from '@/stores/product'

const product = useProductListStore()
</script>
<template>
  <div>
    More, give me more, give me more, if i had a heart i would love you. If i had a voice i would to
    sing. After the night when i wake up i will see what tomorrow bring.
  </div>
  <div className="container">
    <ProductCard
      v-for="item in product.getProduct()"
      :item="item"
      @enlarge-text="product.deleteProduct(item.id)"
      @enlarge-add-cart="product.addToProductCart(item.id)"
    />
  </div>
</template>
<style scoped>
.container {
  width: 820px;
  display: grid;
  grid-template-columns: 400px 400px auto;
  grid-gap: 10px;
  padding-top: 20px;
}
</style>
