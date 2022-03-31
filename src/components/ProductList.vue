<template>
  <div class="products">
    <ProductItem
      :article="product"
      v-for="product in products?.articles"
      :key="product.id"
      @add-to-cart="addToCart(product)"
    ></ProductItem>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore";
import { mapWritableState } from "pinia";
import { defineComponent } from "vue";
import ProductItem from "../components/ProductItem.vue";
import * as products from "../inventory/inventory.json";
export default defineComponent({
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      products: products,
      cart: [],
    };
  },
  computed: {
    ...mapWritableState(useCartStore, {
      setCart: "cart",
    }),
  },
  methods: {
    addToCart: function (product) {
      this.cart.push(product);
      this.setCart = this.cart;
      alert("Product added");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
