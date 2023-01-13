<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
// const selected = ref(null);
const movieInfo = ref(false);
const getMoviesInfo = async () => {
  movieInfo.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "261b287b93c009cd3f2fae376443794a",
      },
    })
  ).data;
};
await getMoviesInfo();

const purchaseMovie = () => {
  getMoviesInfo();
  store.$patch((state) => {
    state.boughtPosters.push(movieInfo.value.poster_path);
  });
};
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div v-if="movieInfo" class="info-container">
          <img class="poster" :src="`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`" alt="" />
          <div class="info">
            <h1>{{ movieInfo.title }}</h1>
            <p>
              Release Date: {{ movieInfo.release_date }} | Popularity:
              {{ movieInfo.popularity }} | Runtime: {{ movieInfo.runtime }}
            </p>
            <p>
              Vote Average: {{ movieInfo.vote_average }} | Vote Count:
              {{ movieInfo.vote_count }}
            </p>
            <h2>Overview:</h2>
            <p>{{ movieInfo.overview }}</p>
            <button @click="purchaseMovie()" type="reset">ADD</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1f2123;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.info-container {
  color: white;
  position: absolute;
  display: flex;
  padding: 5%;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

h1 {
  padding: 5%;
  color: red;
}

p {
  padding: 2%;
  padding-left: 5%;
}

h2 {
  padding: 5%;
}

.info {
  padding: 2%;
}

img {
  height: 450px;
}

button {
  margin-top: 10%;
  padding: 2%;
  height: auto;
  width: 100px;
  color: black;
  background-color: white;
  margin-left: 80%;
}
</style>
