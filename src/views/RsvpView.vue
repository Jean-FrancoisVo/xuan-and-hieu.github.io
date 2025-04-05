<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

interface FormData {
  attendeeFirstName: string;
  attendeeLastName: string;
  eventsAttending: string;
}
const formData = reactive<FormData>({
  attendeeFirstName: '',
  attendeeLastName: '',
  eventsAttending: ''
})
const showSuggestions = ref<boolean>(true);
const attendeeHasCompany = ref<boolean>(false)
const allAttendeeSuggestions = ref<string[]>([
  'Anne-Marie'
])
const suggestions = computed(() => {
  if (!formData.attendeeFirstName) {
    return []
  }
  const lowerInput = formData.attendeeFirstName.toLowerCase()
  return allAttendeeSuggestions.value.filter((suggestion) =>
    suggestion.toLowerCase().startsWith(lowerInput)
  )
})

function handleSubmit() {
  console.log('Form data:', formData)

}

function selectSuggestion(suggestion: string) {
  formData.attendeeFirstName = suggestion
  showSuggestions.value = false
}

function highlightMatch(suggestion: string) {
  const lowerInput = formData.attendeeFirstName.toLowerCase();
  const lowerSuggestion = suggestion.toLowerCase();
  const startIndex = lowerSuggestion.indexOf(lowerInput);

  if (startIndex === -1) {
    return suggestion;
  }

  const endIndex = startIndex + lowerInput.length;
  const beforeMatch = suggestion.substring(0, startIndex);
  const match = suggestion.substring(startIndex, endIndex);
  const afterMatch = suggestion.substring(endIndex);

  return `${beforeMatch}<b>${match}</b>${afterMatch}`;
}

function focusOn(element: string) {
  showSuggestions.value = true
}

function blurOn(element: string) {
  showSuggestions.value = false;
}

</script>

<template>
  <main>
    <h3 class="sacramento">rsvp</h3>
    <p>
      Que vous veniez pour tout le week-end ou seulement pour le grand jour, nous serons honorés de vous compter parmi
      nous. <br /><br />
      Veuillez confirmer votre présence <span>avant le 30 avril</span>
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <div class="search-dropdown">
          <label for="first-name">Prénom</label>
          <input type="text" id="first-name" class="search-input" :class="{'hide-bottom' : suggestions.length > 0 && showSuggestions}" v-model="formData.attendeeFirstName" @focus="focusOn('firstName')" @blur="blurOn('firstName')">
          <ul v-if="suggestions.length > 0 && showSuggestions" class="search-suggestions">
            <li v-for="suggestion in suggestions" :key="suggestion" @mousedown="selectSuggestion(suggestion)" class="suggestion-item">
              <span v-html="highlightMatch(suggestion)"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <label for="last-name">Nom</label>
        <input type="text" id="last-name" v-model="formData.attendeeLastName">
      </div>
      <div class="form-group">
        <label for="event">Les évènements auxquels vous allez participer</label>
        <select id="event" name="event" v-model="formData.eventsAttending">
          <option value="">Sélectionnez une option</option>
          <option value="both">Les deux (Réception - Brunch)</option>
          <option value="reception">Réception</option>
          <option value="brunch">Brunch</option>
        </select>
      </div>
      <div class="form-group" v-if="attendeeHasCompany">
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
        <div>Choix des menu</div>
        <label class="custom-checkbox">
          <input type="checkbox" name="option" value="omnivore">
          <span class="checkbox"></span><span class="label">Menu omnivore</span>
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" name="option" value="vegan">
          <span class="checkbox"></span><span class="label">Menu vegan</span>
        </label>
      </div>
      <div class="form-group">
        <label for="diet">Avez-vous des restrictions alimentaires ? </label>
        <input type="text" id="diet">
      </div>
      <div class="form-group">
        <label for="questions">Des questions ou commentaires ?</label>
        <input type="text" id="questions">
      </div>
      <div class="validate">
        <button type="submit">Validez</button>
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
  font-family: "Cormorant Garamond", serif;
  padding: 2vh 5vw;
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--color-sacramento);
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
}

input:focus {
  border: 2px solid var(--color-sacramento);
}

label {
  color: var(--color-sacramento);
  font-size: 1rem;
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

button[type="submit"] {
  font-family: Alex Brush, sans-serif;
  font-weight: 400;
  font-size: 0.65em;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  background-color: var(--color-sacramento);
  border-color: var(--color-sacramento);
  color: white;
  border-radius: 18px;
  padding: 0.7em 1.2em;
  margin: 1em 0;
}

.validate {
  text-align: center;
}

.search-dropdown {
  position: relative;
  padding-bottom: 0!important;
}

.search-input {
  width: 100%;
  padding: 2vh 5vw;
  border: 1px solid var(--color-sacramento);
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: rgba(255, 255, 255, 0.55);
}

.search-suggestions {
  font-family: "Cormorant Garamond", serif;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #FBF4E9;
  border: 1px solid var(--color-sacramento);
  border-top: none;
  border-radius: 0 0 4px 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: black;
}

.suggestion-item {
  padding: 1.75vh 5vw;
  cursor: pointer;
}

.hide-bottom {
  border-radius: 10px 10px 0 0;
}

</style>
