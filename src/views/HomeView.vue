<script setup lang="ts">

</script>

<template>
  <main>
    <div class="background"></div>
    <div class="noise"></div>
    <div class="header">
      Xuan & Hieu
    </div>
    <div class="circle-around"></div>
    <div class="wrapper-portrait">
      <img src="@/assets/portrait.jpg" alt="portrait" class="portrait">
    </div>
    <div>
      <img src="@/assets/2%20sparkle.png" alt="sparkle" class="sparkle">
    </div>
    <div class="content">
      Aout 2025 <br/>
      Palais Bénédictine - Fécamp
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
  background: linear-gradient(to bottom, rgba(247,231,206,1), rgba(255,255,255,1)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
/*  background: radial-gradient(circle, rgba(247,231,206,1) 50%, rgba(255,255,255,1) 100%);*/
}

.portrait {
  display: block;
  margin-left: auto;
  margin-right: auto;
/*  border-radius: 50% 50% 0 0;*/
  border-top-left-radius: 56% 37%;
  border-top-right-radius: 56% 37%;
  width: 85vw;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 1;
}

.sparkle {
  position: absolute;
  width: 100vw;
  top: 13vh;
}

</style>
