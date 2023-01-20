<script setup></script>

<template>
  <div class="hero">
    <h2>Welcome to Walmart IMDB, Movies Right to your door!</h2>
  </div>

  <!-- <img src="../images/seats.jpeg" alt="" /> -->
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
  /* background: linear-gradient(0deg, #000000 15%, #ffffff44 100%); */
}

.hero>h1 {
  color: white;
  position: fixed;
  font-size: 100px;
  /* padding-left: 5%; */
  /* padding-top: 5%; */
  /* width: 230px; */
  text-transform: uppercase;
}

/* img {
  display: block;
  width: 80%;
  height: 70%;
  margin-top: 0;
} */

h2 {
  font-family: 'Montserrat', sans-serif;
}
</style>
