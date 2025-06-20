<template>
  <div class="product-page container py-5">
    <h2 class="text-center text-gold mb-5">Colecția Noastră de Parfumuri</h2>

    <!-- Filter controls -->
    <div class="filters text-center mb-4">
      <div class="d-inline-block me-2">
        <input v-model="searchInput" class="form-control" placeholder="Caută parfum..." />
      </div>

      <div class="d-inline-block me-2">
        <input v-model="priceMin" type="number" class="form-control" placeholder="Preț minim" />
      </div>

      <div class="d-inline-block me-2">
        <input v-model="priceMax" type="number" class="form-control" placeholder="Preț maxim" />
      </div>

      <div class="d-inline-block me-2">
        <select v-model="sortOption" class="form-select">
          <option value="default">Sortare implicită</option>
          <option value="price-asc">Preț crescător</option>
          <option value="price-desc">Preț descrescător</option>
          <option value="name-asc">Nume A-Z</option>
          <option value="name-desc">Nume Z-A</option>
        </select>
      </div>
    </div>

    <!-- Category Buttons -->
    <div class="mb-4 text-center">
      <button
        v-for="cat in categories"
        :key="cat"
        class="btn category-btn mx-2"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat.toUpperCase() }}
      </button>
    </div>

    <!-- Product Grid -->
    <div class="row g-4">
      <transition-group name="fade" tag="div" class="row g-4">
        <div
          class="col-md-4"
          v-for="product in displayedProducts"
          :key="product.id"
          @click="showDetails(product)"
        >
          <div class="product-card p-4 text-center">
            <div class="image-wrapper mb-3">
              <img
                :src="product.image"
                class="img-fluid rounded"
                :ref="(el) => (imageRefs[product.id] = el)"
              />
              <div class="promo-badge">2+1 GRATIS</div>
            </div>
            <h4 class="fw-bold mb-2">{{ product.name }}</h4>
            <p class="scent-text">{{ product.scent }}</p>
            <h5 class="fw-bold text-gold mb-3">{{ product.price }} RON</h5>
            <button class="btn btn-gold w-100" @click.stop="addToCartWithAnimation(product)">
              Adaugă în Coș 🛒
            </button>
          </div>
        </div>
      </transition-group>
    </div>

    <div v-if="displayedProducts.length < filteredProducts.length" class="text-center mt-4">
      <button class="btn btn-gold" @click="loadMore">Încarcă mai multe</button>
    </div>

    <!-- Modal -->
    <PerfumeDetailsModal
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import PerfumeDetailsModal from '@/components/PerfumeDetailsModal.vue'
import { useCartStore } from '@/stores/cartStore'
import { useFlyToCart } from '@/composables/useFlyToCart.js'
import { cartIconRef } from '@/stores/cartIconRef.js'
import { useRoute } from 'vue-router'

const cart = useCartStore()
const { fly } = useFlyToCart()

const imageRefs = reactive({})

const products = reactive([])
const sampleDescriptions = [
  'Note delicate de flori exotice și mosc.',
  'Esenta orientală rafinată.',
  'Arome dulci de fructe de pădure și vanilie.',
  'Prospețime citrică vibrantă.',
  'Note lemnoase elegante și sofisticate.',
  'Accente intense de piele și chihlimbar.',
  'Miros proaspăt de dimineață de vară.',
  'Parfum senzual pentru serile speciale.',
  'Arome romantice de trandafir și iasomie.',
  'Compoziție echilibrată cu note gurmande.', // mi-era sila sa stau sa caut aici alea de le scrie pe site si nu invat web scraping in seara asta te am pupat gigi
]

for (let i = 1; i <= 100; i++) {
  if (i === 79) continue
  const desc = sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)]
  const imgUrl = `https://esteban.ro/cdn/shop/files/R1-RED_b792914a-0c4b-4149-bedb-1931ea3059b1.jpg?v=1744714517`
  products.push({
    id: i,
    name: `ESTEBAN-${i}`,
    scent: 'Aromă specială',
    price: 45,
    category: i % 3 === 0 ? 'unisex' : i % 2 === 0 ? 'barbati' : 'dama',
    image: imgUrl,
    description: desc,
    ingredients: 'Ingrediente premium',
  })
}

const categories = ['toate', 'dama', 'barbati', 'unisex']
const selectedCategory = ref('toate')
const selectedProduct = ref(null)
const searchInput = ref('')
const priceMin = ref('')
const priceMax = ref('')
const sortOption = ref('default')
const visibleCount = ref(12)

const filteredProducts = computed(() => {
  let list =
    selectedCategory.value === 'toate'
      ? products
      : products.filter((p) => p.category === selectedCategory.value)

  if (searchInput.value.trim()) {
    const text = searchInput.value.toLowerCase().trim()
    list = list.filter((p) => p.name.toLowerCase().includes(text))
  }

  const min = parseFloat(priceMin.value)
  const max = parseFloat(priceMax.value)

  if (!isNaN(min)) list = list.filter((p) => p.price >= min)
  if (!isNaN(max)) list = list.filter((p) => p.price <= max)

  switch (sortOption.value) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      list.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      list.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      list.sort((a, b) => b.name.localeCompare(a.name))
      break
  }

  return list
})

const displayedProducts = computed(() => filteredProducts.value.slice(0, visibleCount.value))

function loadMore() {
  visibleCount.value += 12
}

function addToCartWithAnimation(product) {
  const imageEl = imageRefs[product.id]
  if (imageEl && cartIconRef.value) {
    fly(imageEl, cartIconRef.value)
  }
  cart.addItem(product)
}

function showDetails(product) {
  selectedProduct.value = product
}
</script>

<style scoped>
.product-card {
  background: #2f2f2f;
  border: 1px solid #111;
  border-radius: 20px;
  color: #f6f6f6;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;

  cursor: pointer;
  perspective: 1000px;
}
.product-card:hover {
  transform: rotateY(3deg) rotateX(3deg) scale(1.03);
  box-shadow: 0 8px 30px rgba(255, 203, 116, 0.5);
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}
.image-wrapper {
  border-radius: 12px;
  position: relative;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 380px;
}
.promo-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffcb74;
  color: #111;
  padding: 5px 12px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 0.8rem;
}
.category-btn {
  background: transparent;
  border: 2px solid #ffcb74;
  color: #ffcb74;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  transition: 0.3s ease;
}
.category-btn.active,
.category-btn:hover {
  background: #ffcb74;
  color: #111;
}
.btn-gold {
  background: #ffcb74;
  color: #111;
  border: none;
  transition: 0.3s ease;
}
.btn-gold:hover {
  background: #f6f6f6;
  color: #111;
}
.text-gold {
  color: #ffcb74;
}
.scent-text {
  color: #f6f6f6;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
