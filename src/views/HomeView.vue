<template>
  <div class="home">
    <h1>
      <span class="material-icons"> pets </span> Welcome to our catfood store !
    </h1>
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "@/components/ProductList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    ProductList,
  },
});
</script>
