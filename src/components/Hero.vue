<script setup></script>

<template>
  <div class="hero">
    <h2>Welcome to Walmart IMDB, Movies Right to your door!</h2>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: left;
  background-image: url("../images/seats.jpeg");
  background-size: 100% 100%;
  background-position: center;
  background-attachment: fixed;
}

.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}

.hero>h1 {
  color: white;
  position: fixed;
  font-size: 100px;
  text-transform: uppercase;
}

h2 {
  font-family: 'Montserrat', sans-serif;
}
</style>
