<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUserByEmail = async () => {
    if (password1.value !== password2.value) {
        console.log("Password issue");
        return;
    }
    console.log(email.value, password1.value);
    try {
        await createUserWithEmailAndPassword(auth, email.value, password1.value);
    } catch (error) {
        console.log(error);
    }
};

const registerUserByGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);
}
</script>

<template>
    <div class="whole-thing">
        <div class="google">
            <h1>Register</h1>
            <h2>Register by Google</h2>
            <button @click="registerUserByGoogle">Google</button>
            <hr />
            <h2>Register by email</h2>
        </div>

        <form class="register-form" @submit.prevent="registerUserByEmail()">
            <input v-model="email" type="email" placeholder="email" /> <br />
            <input v-model="password1" type="password" placeholder="password" /> <br />
            <input v-model="password2" type="password" placeholder="re-enter password" /> <br />
            <input type="submit" value="Register" />
        </form>
    </div>
</template>

<style scoped>
* {
    margin: 0 auto;
    text-align: center;
}

.whole-thing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url("../images/register.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid black;
    padding: 20px;
}

.register-form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding: 20px;
    border-radius: 0;
    width: 400px;
    height: 300px;
}

h1 {
    color: red;
}

button {
    color: red;
}

input {
    color: white;
    height: 50px;
    width: 400px;
}

.google {
    width: 445px;
}
</style>
