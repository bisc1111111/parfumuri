<template>
  <div class="layout">
    <Navbar />

    <div class="page-content">
      <div class="floating-blobs">
        <div class="blob blob1"></div>
        <div class="blob blob2"></div>
      </div>
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: #111111;
  color: #f6f6f6;
  font-family: 'Poppins', sans-serif;
  overflow: hidden; /* important! */
}

.page-content {
  padding-top: 80px;
  padding-bottom: 40px;
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden; /* important for smooth transition */
}

/* Floating blobs */
.floating-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
.blob {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 203, 116, 0.08);
  backdrop-filter: blur(20px);
}
.blob1 {
  top: 20%;
  left: 10%;
  animation: move1 40s infinite alternate;
}
.blob2 {
  bottom: 15%;
  right: 15%;
  animation: move2 50s infinite alternate;
}
@keyframes move1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 80px);
  }
}
@keyframes move2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-60px, -40px);
  }
}

.page-enter-active,
.page-leave-active {
  transition:
    transform 0.8s cubic-bezier(0.33, 1, 0.68, 1),
    opacity 0.8s ease;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 12;
}

.page-enter-from {
  transform: translateX(80px);
  opacity: 0;
}
.page-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.page-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
.page-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
