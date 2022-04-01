<template>
  <div class="about">
    <h1>Your Cart</h1>
    <span v-if="cart.length <= 1">Your cart is empty</span>
    <table v-if="cart.length > 1">
      <caption>
        Your order :
      </caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Unit Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }} {{ item.currency }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <span id="total">Total price : {{ total_price }} €</span>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore";
import { mapState } from "pinia";

export default {
  data() {
    return {
      cart: [],
      total_price: Number,
    };
  },
  created() {
    this.fetchCart();
    this.getTotalPrice();
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
      if (this.currentCart.length > 0) {
        this.cart = this.currentCart;
      }
    },
    getTotalPrice: function () {
      let total = 0;
      if (this.cart.length > 0) {
        this.cart.map((item) => {
          total += item.price * item.quantity;
        });
        console.log(total);
        this.total_price = total;
      }
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

#total {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  line-height: 32px;
}
</style>
