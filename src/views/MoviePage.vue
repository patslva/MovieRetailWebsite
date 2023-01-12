<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import Modal from "../components/Modal.vue";

const store = useStore();
const router = useRouter();
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const login = () => {
  router.push("./purchases");
};
</script>

<template>
  <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="header">
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Walmart IMDB</h1>
    </div>
    <button @click="login()">CART</button>
  </div>
  <img
    class="posterss"
    v-for="(poster, index) in store.posters"
    :src="`https://image.tmdb.org/t/p/w500${poster}`"
    @click="openModal(store.id[index])"
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
button {
  width: 50px;
  color: red;
}
h1 {
  color: red;
}
</style>
