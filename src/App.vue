<template>
  <Layout />
  <div ref="cartIcon" class="sticky-cart">🛒</div>
</template>

<script setup>
import Layout from '@/components/Layout.vue'
import { cartIconRef } from '@/stores/cartIconRef.js'
import { onMounted, ref } from 'vue'

const cartIcon = ref(null)

onMounted(() => {
  cartIconRef.value = cartIcon.value
})
</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #111111;
  color: #f6f6f6;
}

.sticky-cart {
  position: fixed;
  top: 14px;
  right: 366px;
  background: #ffcb74;
  color: #111111;
  padding: 12px 20px;
  border-radius: 50px;
  font-weight: bold;

  transition: 0.3s;
}
.sticky-cart:hover {
  background: #f6f6f6;
  color: #ffcb74;
}
</style>
