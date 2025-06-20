<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6 image-side">
            <img :src="product.image" class="img-fluid rounded" ref="modalImage" />
          </div>
          <div class="col-md-6 text-side">
            <h2 class="fw-bold mb-3">{{ product.name }}</h2>
            <p class="scent-text mb-1"><strong>Tip Aromă:</strong> {{ product.scent }}</p>
            <p><strong>Descriere:</strong> {{ product.description }}</p>
            <p><strong>Ingrediente:</strong> {{ product.ingredients }}</p>
            <h4 class="fw-bold text-gold mt-4">{{ product.price }} RON</h4>

            <button class="btn btn-gold btn-lg mt-3 w-100" @click="addToCartWithAnimation">
              Adaugă în Coș 🛒
            </button>

            <button class="btn btn-outline-light mt-2 w-100" @click="close">Închide</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { useFlyToCart } from '@/composables/useFlyToCart.js'
import { ref } from 'vue'
import { cartIconRef } from '@/stores/cartIconRef.js'

const props = defineProps({
  product: Object,
})
const emit = defineEmits(['close'])

const cart = useCartStore()
const { fly } = useFlyToCart()

const modalImage = ref(null)

function addToCartWithAnimation() {
  if (modalImage.value && cartIconRef.value) {
    fly(modalImage.value, cartIconRef.value)
  }
  cart.addItem(props.product)
}

function close() {
  emit('close')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: #2f2f2f;
  border-radius: 20px;
  padding: 30px;
  max-width: 900px;
  width: 90%;
  color: #f6f6f6;
  box-shadow: 0 8px 20px rgba(255, 203, 116, 0.5);
}
.image-side img {
  max-height: 400px;
  object-fit: cover;
}
.btn-gold {
  background: #ffcb74;
  color: #111111;
  border: none;
  transition: 0.3s ease;
}
.btn-gold:hover {
  background: #f6f6f6;
  color: #111111;
}
.text-gold {
  color: #ffcb74;
}
.scent-text {
  color: #f6f6f6;
}
</style>
