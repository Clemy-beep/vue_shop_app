import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    //getCart: (state) => state.cart,
  },
  actions: {},
  persist: {
    storage: window.localStorage,
  },
});
