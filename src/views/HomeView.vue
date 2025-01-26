<script setup lang="ts">
const MS_PER_DAY = 1000 * 60 * 60 * 24
const MS_PER_HOUR = 1000 * 60 * 60;
const monthsBetween = (from: Date, to: Date) => Math.abs((to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()))
const daysBetween = (from: Date, to: Date) => Math.abs((to.getTime() - from.getTime()) / MS_PER_DAY)
const hoursBetween = (from: Date, to: Date) => Math.abs((to.getTime() - from.getTime()) / MS_PER_HOUR)
const weddingDay = new Date('2025-08-23T18:00:00.000Z').getTime()
const now = new Date().getTime()
const untilWedding = new Date(weddingDay - now)

const months = untilWedding.getMonth()
const days = untilWedding.getDay()
const hours = untilWedding.getHours()
const minutes = untilWedding.getMinutes()

</script>

<template>
  <header>
    <div class="title">
      Xuan & Hieu
    </div>
    <div class="menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="" viewBox="0 0 50 47" fill="none">
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
      <div class="countdown">
        <div class="countdown-part">
          <span class="time">{{ months }}</span>
          <span class="unit">mois</span>
        </div>
        <div class="countdown-part">
          <span class="time">{{ days }}</span>
          <span class="unit">jours</span>
        </div>
        <div class="countdown-part">
          <span class="time">{{ hours }}</span>
          <span class="unit">heures</span>
        </div>
        <div class="countdown-part">
          <span class="time">{{ minutes }}</span>
          <span class="unit">minutes</span>
        </div>
      </div>
    </div>
  </main>
<!--  <div>toto</div>-->
</template>

<style scoped>
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
  height: 10vh;
}

main {
  height: 87vh;
  background: var(--color-champagne);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title {
  flex-grow: 3;
}

.logo {
  width: 45vw;
  height: 45vw;
}

.menu {
  align-self: flex-end;
}

.content {
  color: var(--color-sacramento);
  font-family: Anton, serif;
  font-size: 0.95em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 0 5vw;
  word-break: break-word;
  align-self: center;
  text-align: center;
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

.countdown {
  background-color: rgba(0, 0, 0, 0.45);
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.2em 0;
}

.countdown-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time {
  font-family: "Anton", sans-serif;
  font-style: normal;
  font-size: 0.85em;
}

.unit {
  font-size: 0.5em;
  font-weight: 100;
}

</style>
