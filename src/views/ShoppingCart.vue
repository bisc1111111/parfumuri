<template>
  <div class="container py-5">
    <h2 class="text-center text-gold mb-5">Coșul de cumpărături</h2>

    <div v-if="cart.items.length > 0">
      <div class="cart-item mb-4 p-4" v-for="item in cart.items" :key="item.id">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img :src="item.image" alt="" width="80" class="rounded me-4" />
            <div>
              <h5>{{ item.name }}</h5>
              <p class="mb-0">{{ item.scent }}</p>
            </div>
          </div>

          <div class="text-end">
            <h5 class="text-gold">{{ item.price }} RON</h5>
            <div class="quantity-control my-2">
              <button class="btn btn-sm btn-light me-2" @click="cart.decreaseItem(item.id)">
                -
              </button>
              <span>{{ item.qty }}</span>
              <button class="btn btn-sm btn-light ms-2" @click="cart.addItem(item)">+</button>
            </div>
            <button class="btn btn-sm btn-danger mt-2" @click="cart.removeItem(item.id)">
              Șterge produsul complet
            </button>
          </div>
        </div>
      </div>

      <div class="text-end">
        <h4>
          Total: <span class="text-gold">{{ totalPrice }} RON</span>
        </h4>
        <button class="btn btn-gold btn-lg mt-3" @click="checkout">Finalizează comanda</button>
      </div>
    </div>

    <div v-else>
      <h5 class="text-center">Coșul este gol</h5>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const auth = useAuthStore()
const router = useRouter()

function checkout() {
  if (!auth.user) {
    alert('Trebuie să fii logat pentru a finaliza comanda!')
    router.push('/login')
    return
  }
  alert('Comanda a fost trimisă cu succes! 🛍️')
  cart.clearCart()
}

const totalPrice = computed(() => cart.items.reduce((acc, item) => acc + item.price * item.qty, 0))
</script>

<style scoped>
.cart-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  color: white;
}
.text-gold {
  color: gold;
}
.btn-gold {
  background: gold;
  color: black;
  border: none;
}
.quantity-control button {
  min-width: 30px;
}
</style>
