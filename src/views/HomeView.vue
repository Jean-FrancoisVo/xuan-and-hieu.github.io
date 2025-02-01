<script setup lang="ts">
const weddingDay = new Date('2025-08-23T17:00:00.000Z').getTime()
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
        <div class="time-range">17h30 ~ 18h30</div>
        <div class="location">Au jardin du palais</div>
        <img class="decoration" src="@/assets/wedding-decoration_18408585%201.png" alt="wedding" />
      </div>
      <div class="moment">
        <h4>Cocktail</h4>
        <div class="time-range">18h30 ~ 19h30</div>
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
  background: var(--color-champagne);
}

.first-page {
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

.menu {
  align-self: flex-end;
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
