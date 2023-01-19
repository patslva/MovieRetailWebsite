<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const cartItemsCount = ref(0);
cartItemsCount.value = Array.from(store.cart.values()).length;
console.log(cartItemsCount.value);


</script>

<template>
  <div v-for="movie in Array.from(store.cart.values())">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <div class="info">
      <h1>{{ movie.title }}</h1>
      <!-- <h2>{{ movie.date }}</h2> -->
    </div>
    <button @click="store.removeFromCart(movie.id)">Remove</button>
  </div>

  <h2>{{ cartItemsCount }} items in cart</h2>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}

button {
  margin-left: 65%;
  color: red
}

img {
  width: 250px;

}

.info {
  display: inline-block;
}

.posterss {
  width: 200px;
  padding: 1vw;
}

h1 {
  color: red;
}
</style>
