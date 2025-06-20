<template>
  <div class="login-page d-flex justify-content-center align-items-center">
    <div class="login-card p-5 text-center">
      <h2 class="mb-4 text-gold">Autentificare</h2>
      <div class="form-group mb-3">
        <input
          v-model="username"
          type="text"
          class="form-control form-input"
          placeholder="Username"
        />
      </div>
      <div class="form-group mb-3">
        <input
          v-model="password"
          type="password"
          class="form-control form-input"
          placeholder="Password"
        />
      </div>
      <button class="btn btn-gold w-100" @click="login">Login</button>
      <p v-if="error" class="mt-3 text-danger">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    auth.login(username.value)
    router.push('/')
  } else {
    error.value = 'Date de autentificare invalide'
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  background: linear-gradient(135deg, #000000 30%, #111111 70%);
}
.login-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  color: white;
  width: 400px;
  animation: fadeIn 1.2s ease;
}
.form-input {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  color: gold;
}
.form-input::placeholder {
  color: rgba(255, 215, 0, 0.6);
}
.text-gold {
  color: gold;
}
.btn-gold {
  background: gold;
  color: black;
  border: none;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
