<template>
  <main>
    <h3 class="sacramento">rsvp</h3>
    <p>
      Que vous veniez pour tout le week-end ou seulement pour le grand jour, nous serons honorés de vous compter parmi
      nous. <br /><br />
      Veuillez confirmer votre présence <span>avant le 30 avril</span>
    </p>
    <form>
      <div class="form-group">
        <label for="first-name">Prénom</label>
        <input type="text" id="first-name">
      </div>
      <div class="form-group">
        <label for="last-name">Nom de famille</label>
        <input type="text" id="last-name">
      </div>
      <div class="form-group">
        <label for="event">Les évènements auxquels vous allez participer</label>
        <select id="event" name="event">
          <option value="">Sélectionnez une option</option>
          <option value="both">Les deux (Réception - Brunch)</option>
          <option value="reception">Réception</option>
          <option value="brunch">Brunch</option>
        </select>
      </div>
      <div class="form-group">
        <div>Confirmation des accompagnants</div>
        <label class="custom-checkbox">
          <input type="checkbox" name="option" value="option1">
          <span class="checkbox"></span><span class="label">Option 1</span>
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" name="option" value="option1">
          <span class="checkbox"></span><span class="label">Option 1</span>
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" name="option" value="option1">
          <span class="checkbox"></span><span class="label">Option 1</span>
        </label>
      </div>
      <div class="form-group">
        <label for="diet">Avez-vous des restrictions alimentaires ? </label>
        <input type="text" id="diet">
      </div>
    </form>
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
  padding: 3vh 5vw 3vh;
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

form {
  padding: 1vh 5vw;
  font-family: "Cormorant Garamond", serif;
}

select {
  padding: 2vh 4vw;
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--color-sacramento);
  border-radius: 10px;
  outline: none;
}

input {
  padding: 2vh 5vw;
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--color-sacramento);
  border-radius: 10px;
  outline: none;
}

input:focus {
  border: 2px solid var(--color-sacramento);
}

label {
  color: var(--color-sacramento);
  font-size: 0.45em;
  font-weight: bolder;
  padding-bottom: 0.5vh;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 1vh 0;
}

.form-group div {
  color: var(--color-sacramento);
  font-size: 0.45em;
  font-weight: bolder;
  padding-bottom: 1vh;
}

.custom-checkbox input {
  display: none;
}

.custom-checkbox .label {
  color: black;
  vertical-align: 0.4em;
}

.custom-checkbox .checkbox {
  width: 1.5em;
  height: 1.5em;
  border: 1px solid var(--color-sacramento);
  border-radius: 4px;
  display: inline-block;
  position: relative;
  margin-right: 0.6em;
  margin-left: 0.5em;
  cursor: pointer;
}

.custom-checkbox input:checked + .checkbox::after {
  content: "✔";
  font-size: 16px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.custom-checkbox input:checked + .checkbox {
  background-color: var(--color-sacramento);
  border-color: var(--color-sacramento);
}

</style>
<script setup lang="ts">
</script>
