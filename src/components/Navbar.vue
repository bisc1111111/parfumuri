<template>
  <nav class="navbar navbar-expand-lg fixed-top glass-navbar shadow">
    <div class="container">
      <a class="navbar-brand" href="/">ESTEBAN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/parfumuri">Parfumuri</a></li>
          <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>

          <li class="nav-item"><a class="nav-link" href="/detalii">Detalii</a></li>
          <li class="nav-item"><a class="nav-link" href="/livrare-retur">Livrare & Retur</a></li>

          <li class="nav-item ms-3">
            <a class="nav-link position-relative" href="/cart">
              🛒
              <span class="cart-count">{{ totalItems }}</span>
            </a>
          </li>

          <li class="nav-item ms-3" v-if="!auth.user">
            <a class="nav-link" href="/login">Login</a>
          </li>

          <li class="nav-item ms-3" v-if="auth.user">
            <a class="nav-link" @click="auth.logout()">Logout ({{ auth.user }})</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cartStore'
import { computed } from 'vue'

const auth = useAuthStore()
const cart = useCartStore()

const totalItems = computed(() => {
  return cart.items.reduce((sum, item) => sum + item.qty, 0)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.glass-navbar {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.navbar-brand {
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffcb74;
}

.navbar-toggler {
  background-color: #ffcb74;
  opacity: 8%;
}

.navbar-toggler-icon {
  color: white;
}
.nav-link {
  color: white;
  font-weight: 500;
}
.nav-link:hover {
  color: #ffcb74;
}
.cart-count {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #ffcb74;
  color: black;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
