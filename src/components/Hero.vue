<script setup></script>

<template>
  <div class="hero">
    <h1>Movies You Should Watch!</h1>
  </div>

  <img src="../images/fam.jpeg" alt="" />
</template>

<style scoped>
.hero {
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: relative;
  /* width: 100%; */
  height: 590px;
  /* padding: 29%; */
  text-align: left;
}
.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(0deg, #000000 15%, #ffffff44 100%); */
}
.hero > h1 {
  color: white;
  position: fixed;
  font-size: 100px;
  /* padding-left: 5%; */
  /* padding-top: 5%; */
  /* width: 230px; */
  text-transform: uppercase;
}
img {
  display: block;
  margin: auto;
  width: 80%;
  height: 70%;
}
</style>
