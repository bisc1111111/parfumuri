import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    login(username) {
      this.user = username
      localStorage.setItem('user', JSON.stringify(username))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
