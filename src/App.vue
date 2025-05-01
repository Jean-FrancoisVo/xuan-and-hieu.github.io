<script setup lang="ts">
import {RouterView} from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import router from '@/router'
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const isMenuOpen = ref(false)
const goToRsvp = () => {
  router.push("/rsvp")
  toggleMenu()
}
const goToMain = (triggerToggleMenu: boolean = true) => {
  router.push("/")
  if (triggerToggleMenu) {
    toggleMenu()
  }
}
const goToFAQ = () => {
  router.push("/faq")
  toggleMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, {passive: true})
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <header :class="{scrolled: isScrolled}">
    <div class="title" @click="goToMain(false)">
      Xuan & Hieu
    </div>
    <div class="menu" @click="toggleMenu" :class="{open: isMenuOpen}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
  <div class="overlay" :class="{ show: isMenuOpen }">
    <nav class="overlay-content">
      <div @click="goToMain()">Le mariage</div>
      <div>Notre histoire</div>
      <div>Votre voyage & hébergement</div>
      <div @click="goToFAQ()">FAQ</div>
      <button @click="goToRsvp" class="confirm">Confirmez votre présence</button>
    </nav>
  </div>
  <RouterView @toggle-menu-event="toggleMenu"/>
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
  width: 1.4em;
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
  z-index: 100;
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

.overlay-content {
  height: 80%;
  color: var(--color-sacramento);
  font-family: Anton, sans-serif;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay-content div {
  padding: 0.9vh 0;
  cursor: pointer;
}

.overlay-content .confirm {
  margin-top: 2vh;
  width: 75%;
  font-size: 1em;
}

.title {
  flex-grow: 3;
  cursor: pointer;
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
  cursor: pointer;
}

@media screen and (min-width: 600px) {
  .confirm {
    width: 25%!important;
  }
}

</style>
