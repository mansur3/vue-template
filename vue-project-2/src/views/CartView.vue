<script setup>
import CartItem from '@/components/CartItem.vue'
import { useProductListStore } from '@/stores/product'

const product = useProductListStore()
</script>
<template>
  <div className="container">
    <div className="sub-container-header">
      <p>This is sparta!!!!</p>
    </div>
    <div className="sub-container">
      <!-- <div>Welcome to the world.</div> -->
      <CartItem
        v-for="item in product.getAllCartProduct()"
        :item="item"
        @enlarge-delete="product.deleteFromProductCart(item.id)"
        @enlarge-decrement="product.decrementProductCartItem(item.id)"
        @enlarge-increment="product.incrementProductCartItem(item.id)"
      />
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-container-header {
  margin-top: 50px;
  font-weight: bold;
  font-size: 30px;
  color: yellowgreen;
}
.sub-container {
}
</style>
