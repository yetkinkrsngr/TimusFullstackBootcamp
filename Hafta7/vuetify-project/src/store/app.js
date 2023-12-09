// Utilities
import { defineStore } from 'pinia'
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products"

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
    products: []
  }),

  getters: {
    isCountOdd: (state) => state.count % 2 !== 0,
    doubleCount: (state) => state.count * 2,
    getFilteredProduct: (state, id) => state.products.find(el => el.id === id)
    // title veya desc filtreli getters
    // puanı verilen inputtan fazla olanları getirin
  },

  actions: {
    increment() {
      this.count++
    },
    incrementWithValue(val) {
      this.count = this.count + val
    },
    getProducts() {
      try {
        axios.get(BASE_URL).then(response => {
          this.products = response.data;
          console.log(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    async setProduct() {
      try {
        const response = await axios.post(BASE_URL, {
          body: {
            title: "test product",
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct(id) {
      try {
        const response = await axios.put(
          BASE_URL + "/" + id,
          {
            body: {
              title: "test product",
              price: 13.5,
              description: "lorem ipsum set",
              image: "https://i.pravatar.cc",
              category: "electronic",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        const response = await axios.delete(
          BASE_URL + "/" + + id
        );
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  }
})
