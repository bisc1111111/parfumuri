<template>
  <div>
    <HeroSection />

    <!-- Categories -->
    <section class="categories-section py-5">
      <div class="container text-center">
        <h2 class="mb-4 text-accent">Categorii Parfumuri</h2>
        <div class="d-flex flex-wrap justify-content-center gap-4">
          <button class="btn category-btn" @click="goToCategory('dama')">Dama</button>
          <button class="btn category-btn" @click="goToCategory('barbati')">Bărbați</button>
          <button class="btn category-btn" @click="goToCategory('unisex')">Unisex</button>
          <button class="btn category-btn" @click="goToCategory('toate')">Toate parfumurile</button>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features py-5">
      <div class="container text-center">
        <h2 class="mb-5 text-accent display-5 fw-bold">De ce să alegi Esteban?</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="feature-box p-4">
              <i class="bi bi-gem display-4 mb-3 text-accent"></i>
              <h4 class="fw-bold">Livrare & Retur</h4>
              <p>
                Livrare gratuită la toate comenzile de peste 150 Lei. Termen de livrare 1-2 zile
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box p-4">
              <i class="bi bi-lightning display-4 mb-3 text-accent"></i>
              <h4 class="fw-bold">Persistență 12+ ore</h4>
              <p>
                Fiecare esență este atent selectată și ne asigurăm că produsele oferite au o
                calitate superioară.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box p-4">
              <i class="bi bi-stars display-4 mb-3 text-accent"></i>
              <h4 class="fw-bold">Suport Clienți</h4>
              <p>
                Echipa noastră vă stă la dispoziție de Luni până Vineri între 9 și 17 pentru orice
                fel de informații sau suport
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials py-5">
      <div class="container text-center">
        <h2 class="mb-5 text-accent">Ce spun clienții noștri</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card p-4">
              <p>"{{ testimonial.comment }}"</p>
              <h5 class="mt-3 text-accent">- {{ testimonial.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta py-5 text-center">
      <h2 class="mb-4 text-accent display-6">Ești pregătit să fii un om nou?</h2>
      <button class="btn btn-lg btn-accent" @click="goToCategory('toate')">Comandă acum</button>
    </section>

    <a href="https://wa.me/40712345678" target="_blank" class="whatsapp-float"> 📱 WhatsApp </a>

    <!-- Footer -->
    <footer class="py-4 text-center text-light footer-bg">
      &copy; 2025 Esteban. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import { useRouter } from 'vue-router'

const testimonials = [
  { name: 'Andreea', comment: 'Produsele Esteban sunt absolut incredibile! Calitate premium.' },
  { name: 'Gigi', comment: 'O am imensă!' },
  { name: 'Beșchea', comment: 'Big dick energy only perfumes.' },
]

const router = useRouter()

function goToCategory(category) {
  router.push({ name: 'PerfumeList', query: { type: category } })
}
</script>

<style scoped>
/* Global background colors */
.categories-section,
.features,
.testimonials,
.cta,
.footer-bg {
  background: #111111;
}

/* Accent color */
.text-accent {
  color: #ffcb74;
}

/* Buttons */
.category-btn {
  background: transparent;
  border: 2px solid #ffcb74;
  color: #ffcb74;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 50px;
  transition: 0.3s ease;
}
.category-btn:hover {
  background: #ffcb74;
  color: #111111;
}

.btn-accent {
  background: #ffcb74;
  color: #111111;
  border: none;
  transition: 0.3s ease;
}
.btn-accent:hover {
  background: #f6f6f6;
  color: #ffcb74;
}

/* Feature box */
.feature-box {
  background: #2f2f2f;
  border-radius: 15px;
  color: #f6f6f6;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.feature-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(255, 203, 116, 0.5);
}

/* Testimonials */
.testimonial-card {
  background: #2f2f2f;
  border-radius: 15px;
  color: #f6f6f6;
  transition: 0.3s ease;
}
.testimonial-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(255, 203, 116, 0.5);
}

/* CTA gradient */
.cta {
  background: linear-gradient(135deg, #111111, #2f2f2f);
  color: #f6f6f6;
}

/* WhatsApp floating button */
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ffcb74;
  color: #111111;
  padding: 12px 20px;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: 0.3s;
}
.whatsapp-float:hover {
  background: #f6f6f6;
  color: #ffcb74;
}
</style>
