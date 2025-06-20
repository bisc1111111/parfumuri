import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import PaginaParfumuri from '@/views/PaginaParfumuri.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import DetaliiPage from '@/views/DetaliiPage.vue'
import LivrareReturPage from '@/views/LivrareReturPage.vue'

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  { path: '/parfumuri', name: 'PaginaParfumuri', component: PaginaParfumuri },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  {
    path: '/detalii',
    name: 'Detalii',
    component: DetaliiPage,
  },
  {
    path: '/livrare-retur',
    name: 'LivrareRetur',
    component: LivrareReturPage,
  },
  // Fallback for unknown routes
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
