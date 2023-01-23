<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();

</script>

<template>
  <div class="cart-container">
    <div class="cart-item" v-for="movie in Array.from(store.cart.values())">
      <div class="movie-box">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
        <div class="info">
          <h1>{{ movie.title }}</h1>
        </div>
        <button class="remove-button" @click="store.removeFromCart(movie.id)">Remove</button>


      </div>
    </div>
    <h2>{{ Array.from(store.cart.values()).length }} items in cart</h2>
  </div>
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

.movie-box {
  border: 1px solid silver;
  padding: 10px;
  margin: 10px;
}

img {
  width: 250px;

}

.info {
  display: inline-block;
}

.remove-button {
  cursor: pointer;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px;

}

.cart-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.cart-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}




.posterss {
  width: 200px;
  padding: 1vw;
}

h1 {
  color: red;
}
</style>
