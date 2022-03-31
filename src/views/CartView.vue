<template>
  <div class="about">
    <h1>Your Cart</h1>
    <span v-if="cart.length === 0">Your cart is empty</span>
    <table v-if="cart.length > 0">
      <caption>
        Your order :
      </caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }} {{ item.currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore";
import { mapState } from "pinia";

export default {
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.fetchCart();
  },
  computed: {
    ...mapState(useCartStore, {
      getCart: "cart",
    }),
    currentCart() {
      return this.getCart;
    },
  },
  methods: {
    fetchCart: function () {
      console.log(this.currentCart.length);
      if (this.currentCart.length > 0) this.cart = this.currentCart;
    },
  },
};
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0.5em;
}
table,
tr {
  border: 1px solid black;
}
</style>
