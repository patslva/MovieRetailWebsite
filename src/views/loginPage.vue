<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "../store/index.js";
const store = useStore();
const router = useRouter();
const name = ref("");
const password = ref("");
const error = ref(false);
const movieInfo = ref(false);
const movie = "movie";
const timeWindow = "day";
const getMovieInfo = async () => {
  movieInfo.value = (
    await axios.get(
      `https://api.themoviedb.org/3/trending/${movie}/${timeWindow}`,
      {
        params: {
          api_key: "261b287b93c009cd3f2fae376443794a",
        },
      }
    )
  ).data;
  for (let movies of movieInfo.value.results) {
    store.$patch((state) => {
      state.posters.push(movies.poster_path);
      state.id.push(movies.id);
      state.hasChanged = true;
    });
  }
};
const login = () => {
  if (name.value === "tmdb" && password.value === "movies") {
    getMovieInfo();
    router.push("./movies");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="log">
    <div class="company">
      <img src="../images/logo.png" alt="" />
      <div>
        <h1>Walmart IMDB</h1>
      </div>
    </div>
    <form @submit.prevent="login()">
      <input type="text" placeholder="UserName" v-model="name" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="LOGIN" />
    </form>
    <div v-if="error" class="submitted">
      <p>Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
.company {
  display: flex;
}
.log {
  display: flex;
  flex-direction: column;
  /* background: url("../images/movieWallpaper.jpg") no-repeat center/cover; */
}
button {
  margin-left: 65%;
  color: red;
}
img {
  width: 100px;
}
input {
  color: white;
  display: inline-block;
}
h1 {
  color: red;
}
form {
  margin: 0 auto;
  text-align: center;
}
</style>
