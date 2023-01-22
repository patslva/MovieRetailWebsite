<script setup></script>

<template>
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Walmart IMDB</h1>
    </div>
    <div class="register">
      <RouterLink to="/register" custom v-slot="{ navigate }">
        <button class="boxed-button" @click="navigate" role="link">REGISTER</button>
      </RouterLink>
    </div>
  </div>
  <div class="login">
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button class="boxed-button" @click="navigate" role="link">LOGIN</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
  align-items: center;
}

.login {
  padding-left: 2%;
  display: flex;
  align-items: center;
}

.register {
  padding-left: 47%;
  display: flex;
  align-items: center;
}

.boxed-button {
  border: 2px solid silver;
  padding: 10px 20px;
}

button {
  margin-left: 70%;
  color: red;
}

img {
  width: 100px;
}

h1 {
  color: red;
}
</style>
