<script setup>
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";

const store = useStore();
const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const errorCheck = ref(false);


const register = () => {
  router.push("./register");
};

const login = () => {
  try {
    signInWithEmailAndPassword(auth, email.value, password.value).then(
      (userCredential) => {
        const user = userCredential.user;
        router.push("./movies");
      }
    );
  } catch (error) {
    errorCheck.value = true;
    errorMessage.value = error.message;
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
    <div class="login">
      <h1>
        Login
      </h1>
    </div>
    <form class="login" @submit.prevent="login()">
      <input type="text" placeholder="email" v-model="email" />
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
  background-color: transparent;
  border: none;
}

.log {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  background: url("../images/movieline.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
  padding: 20px;
  margin-top: 0 !important;

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
  text-align: center;
  margin-top: 0 !important;

}

.login {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 20px;
  border-radius: 0;
  width: 350px;
  height: 200px;

}

input {
  color: white;
  display: inline-block;
  font-size: 20px;
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 10px;
}

.email {
  order: 1;
}

.password {
  order: 2;
}
</style>
