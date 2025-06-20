<template>
  <div class="container py-5">
    <h2 class="text-center text-gold mb-5">Contactează-ne</h2>

    <div class="contact-card mx-auto p-5">
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <input
            v-model="name"
            type="text"
            class="form-control form-input"
            placeholder="Nume"
            required
          />
        </div>
        <div class="mb-4">
          <input
            v-model="email"
            type="email"
            class="form-control form-input"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="message"
            rows="5"
            class="form-control form-input"
            placeholder="Mesajul tău"
            required
          ></textarea>
        </div>
        <button class="btn btn-gold w-100" type="submit">Trimite Mesajul</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert('Mesaj trimis cu succes! ✨ (demo for the moment)')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  color: white;
  max-width: 600px;
}
.form-input {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  color: gold;
}
.form-input::placeholder {
  color: rgba(255, 215, 0, 0.7);
}
.text-gold {
  color: gold;
}
.btn-gold {
  background: gold;
  color: black;
  border: none;
}
</style>
