<script setup></script>

<template>
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Walmart IMDB</h1>
    </div>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">LOGIN</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
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
