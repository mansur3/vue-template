<script setup>
import { useProductListStore } from '@/stores/product'

const product = useProductListStore()
defineProps({
  item: Object
})
function deleteOne(id) {
  product.deleteProduct(id)
}
</script>
<template>
  <div className="card-container">
    <div>
      <img :src="item.image" width="375px" height="200px" />
    </div>
    <div className="card-sub-container">
      <p>Title: {{ item.name }}</p>
      <p>Price:{{ item.price }}</p>
      <p>Description: description</p>
      <!-- <button @click="deleteOne(item.id)">Delete</button> -->
      <button @click="$emit('enlarge-text')">Delete</button>
      <button @click="$emit('enlarge-add-cart')">Add to cart</button>
    </div>
  </div>
</template>
<style scoped>
.card-sub-container {
  background-color: gray;
  height: 170px;
  border-radius: 0px 0px 5px 5px;
}
.card-container {
  width: 400px;
  height: 400px;
  padding: 10px;
  border: 4px solid blue;
  border-radius: 10px;
}
</style>
