// import { ref, computed } from 'vue'
// import type { Ref } from 'vue'
// import { defineStore } from 'pinia'
import data from '../../product_json/MOCK_DATA.json'

interface Product {
  id: string
  image: string
  name: string
  price: number
}
// export const useProductListsStore = defineStore('product', () => {
//   var product: Ref<Product[]> = ref([])

//   const deleteProduct = (id: String) => {
//     const newFilteredProduct: Product[] = product.value.filter((item) => {
//       return item.id == id
//     })
//     product.value = newFilteredProduct
//   }

//   const getProduct = () => {
//     console.log('product list', product.value)
//   }

//   return {
//     product,
//     deleteProduct,
//     getProduct
//   }
// })

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductListStore = defineStore('product', () => {
  const product = ref(data)
  const cart = ref([])
  function getProduct() {
    return product.value
  }
  function deleteProduct(id: number) {
    const filteredProductList = product.value.filter((item) => {
      if (id == item.id) {
        return false
      } else {
        return true
      }
    })
    product.value = filteredProductList
  }
  function getAllCartProduct() {
    return cart.value
  }
  function addToProductCart(id: number) {
    console.log('item', id)
    const productItem = product.value.find((item) => item.id == id)
    const cartItem = cart.value.find((item) => item.id == id)
    const FilteredCartItem = cart.value.filter((item) => item.id != id)

    if (cartItem) {
      const cartItemCount = cartItem.count + 1
      cart.value = [...FilteredCartItem, { ...cartItem, count: cartItemCount }]
    } else {
      cart.value = [...cart.value, { ...productItem, count: 1 }]
    }
  }

  function incrementProductCartItem(id: number) {
    const cartItem = cart.value.find((item) => item.id == id)
    cart.value = cart.value.map((item) => {
      if (item.id == id) {
        const countItem = item.count + 1
        return {
          ...item,
          count: countItem
        }
      } else {
        return item
      }
    })
  }
  function decrementProductCartItem(id: number) {
    console.log('Decrement Product Item')
    const cartItem = cart.value.find((item) => item.id == id)
    const FilteredCartItem = cart.value.filter((item) => item.id != id)
    if (cartItem.count > 1) {
      const cartItemCount = cartItem.count - 1
      cart.value = [...FilteredCartItem, { ...cartItem, count: cartItemCount }]
    } else {
      cart.value = cart.value.filter((item) => item.id != id)
    }
  }

  function deleteFromProductCart(id: number) {
    const productCartList = cart.value.filter((item) => item.id !== id)
    cart.value = productCartList
  }
  return {
    product,
    getProduct,
    deleteProduct,
    getAllCartProduct,
    addToProductCart,
    deleteFromProductCart,
    incrementProductCartItem,
    decrementProductCartItem
  }
})
