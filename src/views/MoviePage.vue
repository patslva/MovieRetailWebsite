<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import Modal from "../components/Modal.vue";

const store = useStore();
const router = useRouter();
const showModal = ref(false);
const selectedId = ref(0);
const searchedMovie = ref("");
const criteria = ref("");
const searchResults = ref([]);
const genre = ref(28);
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

const login = () => {
  router.push("./purchases");
};

const search = async (direction) => {
  page.value += direction;
  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "261b287b93c009cd3f2fae376443794a",
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
    </select>
    <input type="search" v-model="criteria" @keydown.enter="search(0)" />
    <button @click="toCart()">CART</button>
    <button @click="toLogin()">LOGIN</button>
    <button @click="toHome()">HOMEPAGE</button>
  </div>
  <template v-if="searchResults.length">
    <div class="navigation">
      <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
      <button class="previous" v-show="page > 1" @click="search(-1)">Prev</button>
      <button class="next" v-show="page < totalPages" @click="search(1)">Next</button>
    </div>
  </template>
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
