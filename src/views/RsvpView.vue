<template>
  <main>
    <h3 class="sacramento">le mariage</h3>
    <p>
      Que vous veniez pour tout le week-end ou seulement pour le grand jour, nous serons honorés de vous compter parmi nous. <br/>
      Veuillez confirmer votre présence <span>avant le 30 avril</span>
    </p>
  </main>
</template>

<style>
main {
  background: var(--color-champagne);
  overflow-x: hidden;
  margin-top: 10vh;
}

.sacramento {
  color: var(--color-sacramento);
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

p {
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

@media screen and (min-width: 600px) {
  p {
    padding: 5vh 25vw;
  }
}

p span {
  font-weight: bolder;
}
</style>
<script setup lang="ts">
</script>
