<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const weddingDay = new Date('2025-08-23T17:00:00.000Z').getTime()
const now = new Date().getTime()
const untilWedding = new Date(weddingDay - now)

const months = untilWedding.getMonth()
const days = untilWedding.getDay()
const hours = untilWedding.getHours()
const minutes = untilWedding.getMinutes()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
const handleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <header :class="{scrolled: isScrolled}">
    <div class="title">
      Xuan & Hieu
    </div>
    <div class="menu" @click="handleMenu" :class="{open: isMenuOpen}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
  <main>
    <div class="overlay" :class="{ show: isMenuOpen }">
      <nav class="overlay-content">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
    <div class="first-page">
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
    </div>
    <div class="second-page">
      <h3 class="sacramento">le mariage</h3>
      <p>
        Venez célébrer avec nous tout le weekend au <span>Palais Bénédictine</span><br />
        110 rue Alexandre le Grand <br />
        76400 Fécamp
      </p>
    </div>
    <div class="third-page">
      <h3 class="champagne">le jour j</h3>
      <p>Samedi 23 août</p>
    </div>
    <div class="fourth-page">
      <div class="moment">
        <h4>Cérémonie</h4>
        <div class="time-range">16h30 ~ 18h00</div>
        <div class="location">Au jardin du palais</div>
        <img class="decoration" src="@/assets/wedding-decoration_18408585%201.png" alt="wedding" />
      </div>
      <div class="moment">
        <h4>Cocktail</h4>
        <div class="time-range">18h00 ~ 19h30</div>
        <div class="location">Toujours au jardin du palais</div>
        <img class="decoration" src="@/assets/wine_14590973%201.png" alt="wine" />
      </div>
      <div class="moment">
        <h4>Réception</h4>
        <div class="time-range">19h30 ~ 23h59</div>
        <div class="location">La salle des Abbés pour les adultes</div>
        <div class="location">Les salons attenants pour les kids</div>
        <img class="decoration" src="@/assets/spoon_15675636%201.png" alt="dinner" />
      </div>
    </div>
    <div class="fifth-page">
      <h3 class="champagne">la nuit</h3>
    </div>
    <div class="sixth-page">
      <div class="moment">
        <h4>Soirée</h4>
        <div class="time-range">00h00 ~ 03h45</div>
        <div class="location">La salle des Abbés</div>
        <img class="decoration" src="@/assets/music_15675687%201.png" alt="music" />
      </div>
    </div>
    <div class="seventh-page">
      <h3 class="champagne">le lendemain</h3>
      <p>Dimanche 24 Août</p>
    </div>
    <div class="eighth-page">
      <div class="moment">
        <h4>Brunch</h4>
        <div class="time-range">11h00 ~ 15h00</div>
        <div class="location">La verrière du palais</div>
        <img class="decoration" src="@/assets/coffee_15675463%201.png" alt="coffee" />
      </div>
    </div>
    <div class="ninth-page">
      <h3 class="champagne">le dresscode</h3>
    </div>
    <div class="tenth-page">
      <div>
        Soyez <span>élégants</span> et surtout <span>à l’aise</span> !
      </div>
      <div>
        Envie de briller ? C’est l’occasion parfaite de sortir votre plus beau costume
        ou votre robe de soirée. Un brin d’extravagance est même le bienvenu !
      </div>
      <div>
        Si vous préférez la simplicité, une chemise avec un pantalon ou une jolie robe feront tout autant l’affaire.
      </div>
      <div>
        L’essentiel, c’est que vous vous sentiez bien et prêt·e à faire la fête avec nous !
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
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
  width: 100vw;
}

header::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 50%;
  left: 25%;
  border-top: 1px solid var(--color-sacramento);
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s ease-in-out;
}

header.scrolled::before {
  opacity: 1;
}

.menu {
  height: 4vh;
  width: 12vw;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.menu span {
  display: block;
  position: absolute;
  height: 0.4vh;
  width: 100%;
  background: var(--color-sacramento);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.menu span:nth-child(1) {
  top: 0;
}

.menu span:nth-child(2), .menu span:nth-child(3) {
  top: 1.5vh;
}

.menu span:nth-child(4) {
  top: 3vh;
}

.menu.open span:nth-child(1) {
  top: 1.5vh;
  width: 0;
  left: 50%;
}

.menu.open span:nth-child(2) {
  transform: rotate(45deg);
}

.menu.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.menu.open span:nth-child(4) {
  top: 1.5vh;
  width: 0;
  left: 50%;
}

.overlay {
  height: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--color-champagne);
  overflow-x: hidden;
  transition: all 0.7s cubic-bezier(.25, .75, .5, 1.25);
  margin-top: 10vh;
}

.overlay.show {
  height: 100%;
}

main {
  background: var(--color-champagne);
}

.first-page {
  margin-top: 10vh;
  height: 85vh;
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

.content {
  color: var(--color-sacramento);
  font-family: Anton, serif;
  font-size: 0.85em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 0 5vw;
  word-break: break-word;
  align-self: center;
  text-align: center;
}

h3 {
  font-family: Anton, serif;
  font-size: 0.9em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 5vh 0 0 0;
  word-break: break-word;
  text-align: center;
}

.second-page {
  margin: 5vh 0;
}

.sacramento {
  color: var(--color-sacramento);
}

.champagne {
  color: var(--color-champagne);
}

.confirm {
  border-radius: 12px;
  border: 1px solid var(--color-sacramento);
  color: var(--color-sacramento);
  text-align: center;
  font-family: "Alex Brush", serif;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1vh 4vw;
  background-color: var(--color-champagne);
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

.second-page p {
  color: #000;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.60em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5vh 5vw;
  white-space: pre-wrap;
}

.second-page span {
  font-style: italic;
  font-weight: 700;
}

.third-page {
  background-image: url("@/assets/IMG_0004.JPG");
  min-width: 100vw;
  min-height: 71vh;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 11vh;
  text-shadow: 0 0 15px black;
}

p {
  color: var(--color-champagne);
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.60em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.fourth-page {
  background-color: var(--color-champagne);
  text-align: center;
  padding: 3vh 0;
}

.moment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

h4 {
  color: var(--color-sacramento);
  font-family: "Alex Brush", serif;
  font-size: 1.2em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.time-range {
  color: black;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.6em;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  padding: 1vh 0;
}

.location {
  color: black;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.6em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.decoration {
  width: 13vw;
  padding: 4vh 0 3vh;
}

.fifth-page {
  background-image: url("@/assets/IMG_9992.JPG");
  min-width: 100vw;
  min-height: 75vh;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 20vh;
  text-shadow: 0 0 15px black;
}

.sixth-page {
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.seventh-page {
  background-image: url("@/assets/IMG_0024.JPG");
  min-width: 100vw;
  min-height: 75vh;
  background-size: 100%;
  background-repeat: no-repeat;
  text-shadow: 0 0 20px black;
  padding-top: 12vh;
}

.eighth-page {
  margin-top: 2vh;
}

.ninth-page {
  margin-top: 4vh;
  background-image: url("@/assets/IMG_0005.JPG");
  min-width: 100vw;
  min-height: 50vh;
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: 35% 0;
  padding-top: 1vh;
  text-shadow: 0 0 15px black;
}

.tenth-page {
  color: black;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 0.65em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1vh 5vw;
}

.tenth-page div {
  padding: 2vh 0;
}

.tenth-page div span {
  color: black;
  font-family: "Alex Brush", serif;
  font-size: 1.2em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
