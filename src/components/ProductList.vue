<template>
  <div class="products">
    <ProductItem
      :article="product"
      v-for="product in products?.articles"
      :key="product.id"
      @add-to-cart="addToCart(product)"
      @remove-from-cart="removeFromCart(product)"
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
    };
  },
  computed: {
    ...mapWritableState(useCartStore, {
      setCart: "cart",
    }),
  },
  methods: {
    addToCart: function (product) {
      this.setCart.push(product);
      alert("Product added");
    },
    removeFromCart: function (product) {
      var index = this.setCart.findIndex((object) => object.id == product.id);
      this.setCart.splice(index, 1);
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
