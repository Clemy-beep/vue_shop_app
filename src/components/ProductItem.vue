<template>
  <div class="product-item">
    <p class="title">{{ article.title }}</p>
    <p class="brand">{{ article.brand }}</p>
    <p class="description">{{ article.description }}</p>
    <p class="price">{{ article.price }} {{ article.currency }}</p>
    <button class="btn" @click="$emit('addToCart')">
      <span class="material-icons add-to-cart"> add_shopping_cart </span> Add to
      cart
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductItem",
  props: {
    article: Object,
  },
});
</script>

<style scoped>
.product-item {
  width: fit-content;
  display: block;
  padding: 0.5em;
  border-radius: 16px;
  box-shadow: 0px 0px 4px 2px #00000025;
  margin: 0.5em;
  min-width: 200px;
  max-width: 250px;
}

.product-item:hover {
  box-shadow: 0px 0px 4px 4px #00000025;
  padding: 0.6em;
}

.description {
  text-align: justify;
  padding: 0 1em;
  font-size: 12px;
  font-style: italic;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #42b983;
}
.price {
  color: #41cc81;
  font-weight: bold;
}

.btn {
  border: 2px solid #41cc81;
  background-color: transparent;
  color: #41cc81;
  text-align: center;
  padding: 0.5em;
  border-radius: 16px;
  cursor: pointer;
}

.add-to-cart {
  vertical-align: middle;
}
</style>
