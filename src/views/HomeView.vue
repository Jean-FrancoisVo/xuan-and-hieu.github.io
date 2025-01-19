<script setup lang="ts">

</script>

<template>
  <header>
    <div class="title">
      Xuan & Hieu
    </div>
    <div class="menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
        <line x1="11.5" y1="16.5" x2="40.5" y2="16.5" stroke="#043927" stroke-width="3" stroke-linecap="round" />
        <line x1="11.5" y1="26.5" x2="40.5" y2="26.5" stroke="#043927" stroke-width="3" stroke-linecap="round" />
        <line x1="11.5" y1="36.5" x2="40.5" y2="36.5" stroke="#043927" stroke-width="3" stroke-linecap="round" />
      </svg>
    </div>
  </header>
  <main>
    <div class="noise"></div>
    <img class="logo" src="@/assets/logo-v.png" alt="logo">
    <div class="content">
      ça y est, on se marie !
    </div>
    <button class="confirm">Confirmez votre présence</button>
    <div class="popup">
<!--      <img src="@/assets/Xuxu%20&%20Hieu.jpg" alt="portrait">-->
    </div>
  </main>
  <div>toto</div>
</template>

<style scoped>
main {
  min-height: 100vh;
  background: var(--color-champagne);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

header {
  background: var(--color-champagne);
  padding: 1vh 5vw;
  color: var(--color-sacramento);
  font-family: "Alex Brush", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.70em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.title {
  flex-grow: 3;
}

.logo {
  width: 55vw;
  height: 55vw;
}

.menu {
  align-self: flex-end;
}

.content {
  color: var(--color-sacramento);
  font-family: Anton, serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 4vh 0;
}

.confirm {
  border-radius: 12px;
  border: 1px solid var(--color-sacramento);
  color: var(--color-sacramento);
  text-align: center;
  font-family: "Alex Brush", serif;
  font-size: 0.8em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1vh 4vw;
  background-color: var(--color-champagne);
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

.popup {
  min-width: 100vw;
  min-height: 35vh;
  background-image: url("@/assets/Xuxu & Hieu.jpg");
  background-size: 150%;
  background-position: top;
}

</style>
