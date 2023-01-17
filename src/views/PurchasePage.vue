<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div v-for="movie in Array.from(store.cart.values())">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <h1>{{ movie.title }}</h1>
    <h2>{{ movie.date }}</h2>
    <button @click="store.removeFromCart(movie.id)">Remove</button>
  </div>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}

button {
  margin-left: 65%;
}

img {
  width: 100px;
}

.posterss {
  width: 200px;
  padding: 1vw;
}

h1 {
  color: red;
}
</style>
