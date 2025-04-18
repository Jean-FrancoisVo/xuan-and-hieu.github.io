<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

interface FormData {
  attendeeFirstName: string;
  attendeeLastName: string;
  eventsAttending: string;
  attendeeMenu: string;
  groupMembers: Map<string, GroupMember>;
}

interface GroupMember {
  firstName: string;
  lastName: string;
  menu: string | null;
}

interface Attendee {
  firstName: string;
  lastName: string;
  group: string;
}

const formData = reactive<FormData>({
  attendeeFirstName: '',
  attendeeLastName: '',
  eventsAttending: '',
  groupMembers: new Map(),
  attendeeMenu: ''
})
const allAttendees: Attendee[] = [
  { firstName: 'Anne-Marie', lastName: 'Chambonnet-Vo', group: 'CVO' },
  { firstName: 'Dorian', lastName: 'Chambonnet-Vo', group: 'CVO' },
  { firstName: 'Lou', lastName: 'Chambonnet-Vo', group: 'CVO' },
  { firstName: 'Ava', lastName: 'Chambonnet-Vo', group: 'CVO' }
]
const showFirstNameSuggestions = ref<boolean>(true)
const showLastNameSuggestions = ref<boolean>(true)
const attendeeHasCompany = computed(() => {
  if (!formData.attendeeFirstName) {
    return false
  }
  const attendee = findAttendeeFrom(formData.attendeeFirstName, 'firstName')
  if (attendee) {
    return allAttendees.filter((other: Attendee) => attendee.group === other.group).length > 1
  } else {
    return false
  }
})

const attendeeGroup = computed(() => {
  if (!attendeeHasCompany.value) {
    return []
  }
  const attendee = findAttendeeFrom(formData.attendeeFirstName, 'firstName')
  return allAttendees.filter((other: Attendee) => attendee?.group === other.group && attendee.firstName !== other.firstName)
})

const createSuggestionsUsing = (formDataKey: string, allSuggestions: string[]) => computed(() => {
  const formDataField = formData[formDataKey as keyof FormData]
  if (!formDataField) {
    return []
  }
  const lowerInput = (formDataField as string).toLowerCase()
  const result = new Set(allSuggestions.filter((suggestion) => suggestion.toLowerCase().startsWith(lowerInput)))
  return [...result]
})

const firstNameSuggestions = createSuggestionsUsing('attendeeFirstName', allAttendees.map((attendee: Attendee) => attendee.firstName))
const lastNameSuggestions = createSuggestionsUsing('attendeeLastName', allAttendees.map((attendee: Attendee) => attendee.lastName))

function handleSubmit() {
  console.log('Form data:', formData)
}

function updateAccompanying(group: string, firstName: string, isAccompanying: boolean) {
  const existingMember = allAttendees.find(member => member.group === group && member.firstName === firstName)

  if (existingMember) {
    if (isAccompanying) {
      formData.groupMembers.set(firstName, {
        firstName: existingMember.firstName,
        lastName: existingMember.lastName,
        menu: null
      })
    } else {
      formData.groupMembers.delete(firstName)
    }
  }
}

const findAttendeeFrom = (request: string, property: keyof Attendee): Attendee | undefined => allAttendees.find((attendee: Attendee) => attendee[property] === request)

function selectSuggestionFrom(selected: string, property: keyof Attendee) {
  const selectedAttendee = findAttendeeFrom(selected, property)
  if (selectedAttendee) {
    formData.attendeeFirstName = selectedAttendee.firstName
    formData.attendeeLastName = selectedAttendee.lastName
    formData.groupMembers = allAttendees
      .filter((attendee: Attendee) => attendee.group === selectedAttendee.group && attendee.firstName !== selectedAttendee.firstName)
      .reduce((acc: Map<string, GroupMember>, curr: Attendee) => {
        acc.set(curr.firstName, {
          firstName: curr.firstName,
          lastName: curr.lastName,
          menu: null
        })
        return acc
      }, new Map<string, GroupMember>())
  }
  showFirstNameSuggestions.value = false
  showLastNameSuggestions.value = false
}

function highlightMatch(suggestion: string) {
  const lowerInput = formData.attendeeFirstName.toLowerCase()
  const lowerSuggestion = suggestion.toLowerCase()
  const startIndex = lowerSuggestion.indexOf(lowerInput)

  if (startIndex === -1) {
    return suggestion
  }

  const endIndex = startIndex + lowerInput.length
  const beforeMatch = suggestion.substring(0, startIndex)
  const match = suggestion.substring(startIndex, endIndex)
  const afterMatch = suggestion.substring(endIndex)

  return `${beforeMatch}<b>${match}</b>${afterMatch}`
}

function focusOn(element: string) {
  switch (element) {
    case 'firstName':
      showFirstNameSuggestions.value = true
      return
    case 'lastName':
      showLastNameSuggestions.value = true
      return
  }
}

function blurOn(element: string) {
  switch (element) {
    case 'firstName':
      showFirstNameSuggestions.value = false
      return
    case 'lastName':
      showLastNameSuggestions.value = false
      return
  }
}

</script>

<template>
  <main>
    <h3 class="sacramento">rsvp</h3>
    <p>
      Que vous veniez pour tout le week-end ou seulement pour le grand jour, nous serons honorés de vous compter parmi
      nous. <br /><br />
      Veuillez confirmer votre présence <br /> <span>avant le 31 mai</span>
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <div class="search-dropdown">
          <label for="first-name">Prénom</label>
          <input type="text" id="first-name" class="search-input"
                 :class="{'hide-bottom' : firstNameSuggestions.length > 0 && showFirstNameSuggestions}"
                 v-model="formData.attendeeFirstName" @focus="focusOn('firstName')" @blur="blurOn('firstName')">
          <ul v-if="firstNameSuggestions.length > 0 && showFirstNameSuggestions" class="search-suggestions">
            <li v-for="firstNameSuggestion in firstNameSuggestions" :key="firstNameSuggestion"
                @mousedown="selectSuggestionFrom(firstNameSuggestion, 'firstName')" class="suggestion-item">
              <span v-html="highlightMatch(firstNameSuggestion)"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <div class="search-dropdown">
          <label for="last-name">Nom</label>
          <input type="text" id="last-name" class="search-input"
                 :class="{'hide-bottom' : firstNameSuggestions.length > 0 && showFirstNameSuggestions}"
                 v-model="formData.attendeeLastName" @focus="focusOn('lastName')" @blur="blurOn('lastName')">
          <ul v-if="lastNameSuggestions.length > 0 && showLastNameSuggestions" class="search-suggestions">
            <li v-for="lastNameSuggestion in lastNameSuggestions" :key="lastNameSuggestion"
                @mousedown="selectSuggestionFrom(lastNameSuggestion, 'lastName')" class="suggestion-item">
              <span v-html="highlightMatch(lastNameSuggestion)"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <label for="event">Évènements auxquels vous allez participer</label>
        <select id="event" name="event" v-model="formData.eventsAttending">
          <option value="">Sélectionnez une option</option>
          <option value="both">Les deux (Réception - Brunch)</option>
          <option value="reception">Réception</option>
          <option value="brunch">Brunch</option>
        </select>
      </div>
      <div class="form-group" v-if="attendeeHasCompany">
        <div>Confirmation des accompagnants</div>
        <label class="custom-checkbox attendee-group" v-for="(member, index) in attendeeGroup" :key="index">
          <input type="checkbox" name="option" :id="'member-' + index" :value=member.firstName checked
                 @change="updateAccompanying(member.group, member.firstName, ($event.target as HTMLInputElement)?.checked)"
          >
          <span class="checkbox"></span><span class="label">{{ member.firstName }}</span>
        </label>
      </div>
      <div class="form-group">
        <div>Choix des menu</div>
        <div class="choose-menu">
          <span>Pour vous :</span>
          <label class="custom-checkbox">
            <input type="radio" name="option" value="omnivore" v-model="formData.attendeeMenu">
            <span class="checkbox"></span><span class="label">Omnivore</span>
          </label>
          <label class="custom-checkbox">
            <input type="radio" name="option" value="vegan" v-model="formData.attendeeMenu">
            <span class="checkbox"></span><span class="label">Vegan</span>
          </label>
        </div>
        <div v-for="member in attendeeGroup" class="choose-menu">
          <span>Pour {{ member.firstName }} :</span>
          <label class="custom-checkbox">
            <input type="radio" name="option" value="omnivore">
            <span class="checkbox"></span><span class="label">Omnivore</span>
          </label>
          <label class="custom-checkbox">
            <input type="radio" name="option" value="vegan">
            <span class="checkbox"></span><span class="label">Vegan</span>
          </label>
        </div>
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
  padding-bottom: 0 !important;
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

.choose-menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.choose-menu > span:nth-child(3n + 1) {
  justify-content: flex-end;
  text-align: right;
}

.choose-menu span {
  color: black;
  padding-bottom: 0.65em;
}

.attendee-group {
  padding: 0.35vh 0;
}

</style>
