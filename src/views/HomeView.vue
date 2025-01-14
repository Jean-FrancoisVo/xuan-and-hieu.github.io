<script setup lang="ts">

</script>

<template>
  <main>
    <div class="background"></div>
    <div class="noise"></div>
    <div class="header">
      Xuan & Hieu
    </div>
    <div class="wrapper-portrait">
      <img src="@/assets/portrait.jpg" alt="portrait" class="portrait">
    </div>
    <div class="content">
      Aout 2023
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}

.header {
  padding: 5vh 10vw;
  text-align: center;
  color: #043927;
  font-family: "Alex Brush", serif;
  font-weight: 500;
  font-style: normal;
}

.content  {
  padding: 5vh 10vw;
  text-align: center;
  color: #043927;
}

.noise {
  z-index: -1;
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("@/assets/noise.svg");
  background-repeat: repeat;
  opacity: 0.3;
  filter: brightness(130%);
}

.background {
  z-index: -2;
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(247,231,206,1);
}

.portrait {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
  width: 75vw;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 1;
}

</style>
