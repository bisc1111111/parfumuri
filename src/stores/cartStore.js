import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  actions: {
    addItem(item) {
      const existing = this.items.find((i) => i.id === item.id)
      if (existing) {
        existing.qty += 1
      } else {
        this.items.push({ ...item, qty: 1 })
      }
      this.save()
    },

    decreaseItem(id) {
      const existing = this.items.find((i) => i.id === id)
      if (existing) {
        if (existing.qty > 1) {
          existing.qty -= 1
        } else {
          this.removeItem(id)
        }
        this.save()
      }
    },

    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id)
      this.save()
    },

    clearCart() {
      this.items = []
      this.save()
    },

    save() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },
  },
})
