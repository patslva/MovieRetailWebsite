<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import Modal from "../components/Modal.vue";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css';


const store = useStore();
const router = useRouter();
const showModal = ref(false);
const selectedId = ref(0);
const searchedMovie = ref("");
const criteria = ref("");
const searchResults = ref([]);
const genre = ref(28);
const Genres = ref(28);
const page = ref(1);
const totalPages = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  showModal.value = false;
};
const toCart = () => {
  router.push("./purchases");
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};
const search = async (direction) => {
  page.value += direction;

  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "c09d06bd40e47b140813f600f52a6ac7",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};
// await store.populateFirestore(); 
</script>

<template>
  <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Walmart IMDB</h1>
    </div>
    <select v-model="genre" @change="getGenres()">
      <option value="Action">Action</option>
      <option value="Family">Family</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Adventure">Adventure</option>
      <option value="Fantasy">Fantasy</option>
      <option value="TV Movie">TV Movie</option>
    </select>
    <input type="search" placeholder="Search..." v-model="criteria" @keydown.enter="search(0)" />
    <button class="cart" @click="toCart()"><i class="fas fa-shopping-cart"></i></button>
  </div>
  <template v-if="searchResults.length">
    <div class="navigation">
      <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
      <button class="previous" v-show="page > 1" @click="search(-1)">Prev</button>
      <button class="next" v-show="page < totalPages" @click="search(1)">Next</button>
    </div>
  </template>
  <div class="parent-container">
    <div class="movie-grid">
      <template v-if="searchResults.length">
        <img class="movie" v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <template v-else>
        <img class="movie" v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}

select {
  height: 50px;
  margin-left: 75px;
}

input {
  height: 50px;
  margin-left: 75px;
}

.parent-container {
  position: relative;
  height: 100%;
  padding-bottom: 60px;
}

.movie-grid img {
  z-index: 0;
}

.cart {
  height: 50px;
  width: 100px;
  font-size: 40px;
}

.navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}


button {
  cursor: pointer;
  margin-left: 40%;

}

.header {
  width: 1500px;
}

img {
  width: 250px;
  margin: 10px;

}

button {
  width: 50px;
  color: red;
}

h1 {
  color: red;
}

* {
  color: white;
}
</style>
