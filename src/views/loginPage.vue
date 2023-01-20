<script setup>
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
        // store.getMovies();
        router.push("./movies");
      }
    );
  } catch (error) {
    errorCheck.value = true;
    errorMessage.value = error.message;
  }
};

// const registerUserByGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   await signInWithPopup(auth, provider).then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//     router.push("./movies");
//   });
// };
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
}

.log {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

.login {
  margin: 0 auto;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
}

.email {
  order: 1;
}

.password {
  order: 2;
}
</style>
