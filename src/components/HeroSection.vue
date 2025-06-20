<template>
  <div class="hero-section d-flex align-items-center justify-content-center text-center">
    <div class="container">
      <!-- Main Card -->
      <div class="row justify-content-center align-items-center mb-4 animate-offer1">
        <div class="col-md-8">
          <div class="glass-card p-5">
            <h1 class="display-3 mb-3 fw-bold">Esteban</h1>
            <p class="lead mb-4">Lux și opulență. Experiență de neegalat.</p>
            <button class="btn btn-lg btn-gold">Buton</button>
          </div>
        </div>
      </div>

      <!-- Offer Card below -->
      <div class="row justify-content-center animate-offer2">
        <div class="col-md-6">
          <div class="offer-card p-5 position-relative">
            <h3 class="fw-bold mb-3 text-accent">🎁 Super Ofertă</h3>
            <p class="lead mb-3">
              Adaugă azi <strong>3 parfumuri</strong> în coș și vei plăti doar <strong>2</strong>.
            </p>
            <p class="small text-light mt-3">
              Oferta expiră în: <strong>{{ countdown }}</strong>
            </p>
            <div class="promo-ribbon">🔥 LIVRARE GRATUITĂ PESTE 150 RON</div>
            <button class="btn btn-lg btn-gold mt-3">Profită Acum</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const countdown = ref('00:60:00')

onMounted(() => {
  let seconds = 600 * 6
  setInterval(() => {
    seconds--
    const m = String(Math.floor(seconds / 60)).padStart(2, '0')
    const s = String(seconds % 60).padStart(2, '0')
    countdown.value = `00:${m}:${s}`
  }, 1000)
})
</script>

<style scoped>
/* Background */
.hero-section {
  min-height: 100vh;
  background: #111111;
  position: relative;
  overflow: hidden;
}

/* Rotating golden light */
.hero-section::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 203, 116, 0.1) 0%, transparent 60%);
  z-index: 0;
  animation: rotate 20s linear infinite;
}

/* Cards */
.glass-card,
.offer-card {
  background: rgba(47, 47, 47, 0.9);
  border: 1px solid rgba(246, 246, 246, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  color: #f6f6f6;
  position: relative;
}

/* Buttons */
.btn-gold {
  background: #ffcb74;
  color: #111111;
  border: none;
  transition: 0.3s ease;
}
.btn-gold:hover {
  background: #f6f6f6;
  color: #ffcb74;
}

/* Ribbon */
.promo-ribbon {
  position: absolute;
  top: 10px;
  right: -50px;
  background: #ffcb74;
  color: #111111;
  transform: rotate(30deg);
  padding: 3px 20px;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Animations */
.animate-offer1 {
  animation: slideIn 2s ease forwards;
  opacity: 0;
  position: relative;
  padding-bottom: 60px;
}

.animate-offer2 {
  animation: slideIn 2s ease forwards;
  opacity: 0;
}
@keyframes slideIn {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Accent class for text */
.text-accent {
  color: #ffcb74;
}
</style>
