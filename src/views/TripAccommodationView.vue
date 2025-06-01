<script setup lang="ts">
import img9980 from '../assets/IMG_9980.jpg'
</script>

<template>
  <main>
    <div class="first-page">
      <h3>voyage & hébergement</h3>
      <h4>
        Venir en voiture
      </h4>
      <p>🚗</p>
      <p>
        Fécamp est à 2h30 de Paris, 1h de Rouen et 20 min d’Etretat. Le parking est gratuit à Fécamp.
      </p>
      <p>
        ♡♡
      </p>
      <h4>
        Venir en train
      </h4>
      <p>🚂</p>
      <p>
        <span>Si vous partez de Rouen :</span><br/>
        Rouen-Rive-Droite <br/>
        ↓ <br/>
        Bréauté-Beuzeville <br/>
        ↓ <br/>
        Gare de Fécamp <br/><br/>

        <span>Si vous partez de Paris :</span><br/>
        Paris Saint-Lazare <br/>
        ↓ <br/>
        Bréauté-Beuzeville <br/>
        ↓ <br/>
        Gare de Fécamp <br/><br/>

        Le Palais Bénédictine est à 11 min à pied de la gare de Fécamp et 8 min de la plage 🚶
      </p>
    </div>
    <div class="second-page">
      <img :src=img9980 alt="">
    </div>
    <div class="third-page">
      <h4>
        Hôtels à proximité
      </h4>
      <a class="small-padding" href="https://g.co/kgs/k5euNG2" target="_blank" rel="noopener noreferrer">
        LE GRAND PAVOIS
      </a>
      <p>
        15 Quai de la Vicomte<br/>
        76400 Fécamp
      </p>
      <p>
        7 min à pied du Palais<br/>
        10 min à pied de la Gare
      </p>
      <a class="small-padding" href="https://g.co/kgs/rbqVqJG" target="_blank" rel="noopener noreferrer">
        HÔTEL DE LA PLAGE
      </a>
      <p>
        87 Rue de la Plage<br/>
        76400 Fécamp
      </p>
      <p>
        6 min à pied du Palais<br/>
        15 min à pied de la Gare
      </p>
      <a class="small-padding" href="https://booking.com/Share-0NOr8Rl" target="_blank" rel="noopener noreferrer">
        HÔTEL DE LA MER
      </a>
      <p>
        89 Bd Albert 1er, 76400 Fécamp<br/>
        76400 Fécamp
      </p>
      <p>
        10 min à pied du Palais<br/>
        20 min à pied de la Gare
      </p>
      <p>
        ♡♡
      </p>
    </div>
    <div class="fourth-page">
      <h4>
        Airbnb
      </h4>
      <p>
        Vous trouverez <a href="https://www.airbnb.fr/wishlists/1653633687" target="_blank" rel="noopener noreferrer">ici</a> une sélection de logements proches du Palais
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  background: var(--color-champagne);
  overflow-x: hidden;
}

.first-page {
  margin-top: 9vh;
}

h3 {
  color: var(--color-sacramento);
  font-family: Anton, serif;
  font-size: 0.9em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 2vh 0 4vh 0;
  word-break: break-word;
  text-align: center;
}

h4 {
  color: var(--color-sacramento);
  text-align: center;
  font-family: "Alex Brush", serif;
  font-size: 1.15em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1vh 4vw;
}

p {
  font-family: Cormorant Garamond, serif;
  font-weight: 400;
  font-size: 0.7em;
  line-height: normal;
  text-align: center;
  color: black;
  padding: 1.5vh 4vw;
}

span {
  font-weight: bold;
}

.second-page img {
  width: 100vw;
  height: 50vh;
  padding-top: 5vh;
  object-fit: cover;
  object-position: 0 80%;
}

.third-page {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: black;
}

.small-padding {
  font-family: Cormorant Garamond, serif;
  font-weight: bold;
  font-size: 0.7em;
  line-height: normal;
  text-align: center;
  color: black;
  text-decoration: underline;
  padding: 1.5vh 4vw;

}

</style>
