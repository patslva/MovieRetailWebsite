<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
// const getMoviesInfo = async (id) => {
//   movieInfo.value = (
//     await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
//       params: {
//         api_key: "261b287b93c009cd3f2fae376443794a",
//         append_to_response: "videos",
//       },
//     })
//   ).data;
// };
// await getMoviesInfo();
</script>

<template>
  <div class="header">
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Walmart IMDB</h1>
    </div>
  </div>
  <img
    class="posterss"
    v-for="(posters, index) in store.boughtPosters"
    :src="`https://image.tmdb.org/t/p/w500${posters}`"
    @click="openModal(store.boughtId[index])"
    alt=""
  />
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
