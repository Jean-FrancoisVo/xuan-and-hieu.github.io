<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

interface FormData {
  attendeeFirstName: string;
  attendeeLastName: string;
  eventsAttending: string;
  attendeeMenu: string;
  groupMembers: Map<string, GroupMember>;
  dietRestriction: string;
  questions: string;
}

interface GroupMember {
  firstName: string;
  lastName: string;
  menu: string | null;
  age: number | null;
}

interface Attendee {
  firstName: string;
  lastName: string;
  group: string;
  isKid: boolean;
}

interface Suggestion {
  name: string,
  hint: string,
}

const formData = reactive<FormData>({
  attendeeFirstName: '',
  attendeeLastName: '',
  eventsAttending: '',
  groupMembers: new Map(),
  attendeeMenu: '',
  dietRestriction: '',
  questions: ''
})

const allAttendees: Attendee[] = [
  { firstName: 'Adrien', lastName: 'Turmo', group: 'ATU', isKid: false },
  { firstName: 'Eléna', lastName: 'Turmo', group: 'ATU', isKid: false },
  { firstName: 'Alvin', lastName: 'Kisonauth', group: 'KAL', isKid: false },
  { firstName: 'Kim Âu ', lastName: 'Lê', group: 'AUL', isKid: false },
  { firstName: 'Nick', lastName: 'Nguyen', group: 'AUL', isKid: false },
  { firstName: 'Kim Lien', lastName: 'Lê', group: 'AUL', isKid: false },
  { firstName: 'Boris', lastName: 'Boulanger', group: 'BBO', isKid: false },
  { firstName: 'Célia', lastName: 'Melcus', group: 'MEC', isKid: false },
  { firstName: 'Aniruddh', lastName: 'O. Badhbadhe', group: 'MEC', isKid: false },
  { firstName: 'Célia', lastName: 'Kpéné', group: 'KPC', isKid: false },
  { firstName: 'Fabrizio', lastName: 'Defilippi', group: 'KPC', isKid: false },
  { firstName: 'Xuan Anh', lastName: 'Nguyen Vu', group: 'NGX', isKid: false },
  { firstName: 'Kim Cuong', lastName: 'Nguyen', group: 'VAN', isKid: false },
  { firstName: 'Van', lastName: 'Nguyen', group: 'VAN', isKid: false },
  { firstName: 'Chuong', lastName: 'Nguyen', group: 'NGC', isKid: false },
  { firstName: 'Clémentine', lastName: 'Lamotte', group: 'LAM', isKid: false },
  { firstName: 'Olivia', lastName: 'Lamotte', group: 'LAM', isKid: true },
  { firstName: 'Nicolas', lastName: 'Von Saenger', group: 'LAM', isKid: false },
  { firstName: 'Cuc Phuong', lastName: 'Tran Khanh', group: 'CUC', isKid: false },
  { firstName: 'Damien', lastName: 'Flandre', group: 'FLA', isKid: false },
  { firstName: 'Adeline', lastName: 'Tran', group: 'DOM', isKid: true },
  { firstName: 'Dominique', lastName: 'Hornn', group: 'DOM', isKid: false },
  { firstName: 'Binh', lastName: 'Tran', group: 'DOM', isKid: false },
  { firstName: 'Elizabeth', lastName: 'Grillo', group: 'ELI', isKid: false },
  { firstName: 'Laura', lastName: 'Alvamar', group: 'ELI', isKid: false },
  { firstName: 'Enora', lastName: 'Legoas', group: 'ENO', isKid: false },
  { firstName: 'Pierre', lastName: 'Ebran', group: 'ENO', isKid: false },
  { firstName: 'Fabien', lastName: 'Rey', group: 'FAB', isKid: false },
  { firstName: 'Floriane', lastName: 'Bahou', group: 'FLO', isKid: false },
  { firstName: 'Han', lastName: 'Pham', group: 'HAN', isKid: false },
  { firstName: 'Bich Thuy', lastName: 'Nguyen', group: 'HOA', isKid: false },
  { firstName: 'Hoang', lastName: 'Vo', group: 'HOA', isKid: false },
  { firstName: 'Huyen', lastName: 'Phan', group: 'HUY', isKid: false },
  { firstName: 'Manh Dinh', lastName: 'Vu', group: 'JIM', isKid: true },
  { firstName: 'The Vinh', lastName: 'Vu', group: 'JIM', isKid: true },
  { firstName: 'Thao', lastName: 'Vu', group: 'JIM', isKid: false },
  { firstName: 'Jimmy', lastName: 'Vu', group: 'JIM', isKid: false },

  { firstName: 'Nga', lastName: 'Vo', group: 'PAR', isKid: false },
  { firstName: 'Linh', lastName: 'Vo', group: 'PAR', isKid: false },
  { firstName: 'Phuong', lastName: 'Nguyen', group: 'PAR', isKid: false },
  { firstName: 'Dai', lastName: 'Vu', group: 'PAR', isKid: false },
  { firstName: 'Loc', lastName: 'Nguyen', group: 'PAR', isKid: false },
  { firstName: 'Rosalie', lastName: 'Houllier', group: 'PAR', isKid: false },

  { firstName: 'Khiem', lastName: 'Vu', group: 'KHI', isKid: false },
  { firstName: 'Khiem gai', lastName: 'Vu', group: 'KHI', isKid: false }, // TODO

  { firstName: 'Jonathan', lastName: 'Plin', group: 'JON', isKid: false },
  { firstName: 'Joseph', lastName: 'Devarenne', group: 'JOS', isKid: false },
  { firstName: 'Justine', lastName: 'Lesage', group: 'JOS', isKid: false },
  { firstName: 'Juliette', lastName: 'Hanau', group: 'JUL', isKid: false },
  { firstName: 'Bruce', lastName: 'Stevens', group: 'JUL', isKid: false },
  { firstName: 'Ngoc Khanh', lastName: 'Luong', group: 'KHA', isKid: false },
  { firstName: 'Maxime', lastName: 'Jego', group: 'KHA', isKid: false },
  { firstName: 'Lan Phuong', lastName: 'Nguyen', group: 'LAN', isKid: false },
  { firstName: 'Colin', lastName: 'Ton', group: 'LAN', isKid: false },
  { firstName: 'Hoai Linh', lastName: 'Phung', group: 'LIN', isKid: false },
  { firstName: 'Lucia', lastName: 'Vu', group: 'LUC', isKid: true },
  { firstName: 'Martin', lastName: 'Vu', group: 'LUC', isKid: true },
  { firstName: 'Raphaël', lastName: 'Vu', group: 'LUC', isKid: true },
  { firstName: 'Cau Binh', lastName: 'Vu', group: 'LUC', isKid: false },
  { firstName: 'Mai Lan', lastName: 'Tran', group: 'MAI', isKid: false },
  { firstName: 'Marguerite', lastName: 'Tea', group: 'MAR', isKid: false },
  { firstName: 'Aymeric', lastName: 'Jegou', group: 'MAR', isKid: false },
  { firstName: 'Marie', lastName: 'Landois', group: 'MRI', isKid: false },
  { firstName: 'Olivier', lastName: 'Collin', group: 'MRI', isKid: false },
  { firstName: 'Mathieu', lastName: 'Desesquelles', group: 'ANA', isKid: true },
  { firstName: 'Thomas', lastName: 'Desesquelles', group: 'ANA', isKid: true },
  { firstName: 'Marie-Anaïs', lastName: 'Magnat', group: 'ANA', isKid: false },
  { firstName: 'Jérémi', lastName: 'Desesquelles', group: 'ANA', isKid: false },
  { firstName: 'Roxanne', lastName: 'Pata', group: 'MAX', isKid: false },
  { firstName: 'Maxime', lastName: 'Reynier', group: 'MAX', isKid: false },
  { firstName: 'Mélany', lastName: 'Patte', group: 'MEL', isKid: false },
  { firstName: 'Thomas', lastName: 'Chausson', group: 'MEL', isKid: false },
  { firstName: 'Emile', lastName: 'Nguyen', group: 'MIM', isKid: true },
  { firstName: 'Mimi', lastName: 'Nguyen', group: 'MIM', isKid: false },
  { firstName: 'Vincent', lastName: 'Nguyen', group: 'MIM', isKid: false },
  { firstName: 'Daphné An Chi', lastName: 'Dao', group: 'MIU', isKid: true },
  { firstName: 'Trieu Minh', lastName: 'Huyen', group: 'MIU', isKid: false },
  { firstName: 'Duy Quan', lastName: 'Dao', group: 'MIU', isKid: false },
  { firstName: 'Phuong Anh', lastName: 'Truong', group: 'TRU', isKid: false },
  { firstName: 'Morgane', lastName: 'Fouillouse', group: 'MOR', isKid: false },
  { firstName: 'Mathieu', lastName: 'Eck', group: 'MOR', isKid: false },
  { firstName: 'Maïwenn Yên Lam', lastName: 'Toulhoat Nguyen', group: 'NAM', isKid: true },
  { firstName: 'Pierre Junior', lastName: 'Toulhoat Nguyen', group: 'NAM', isKid: true },
  { firstName: 'Nam Phuong', lastName: 'Nguyen Luong', group: 'NAM', isKid: false },
  { firstName: 'Pierre', lastName: 'Toulhoat', group: 'NAM', isKid: false },
  { firstName: 'Quentin', lastName: 'Miorelli', group: 'QUE', isKid: false },
  { firstName: 'Khoi Minh', lastName: 'Tran', group: 'KHO', isKid: false },
  { firstName: 'Kieu Linh', lastName: 'Nguyen', group: 'KHO', isKid: false },
  { firstName: 'My Linh', lastName: 'Lemoine', group: 'LEM', isKid: false },
  { firstName: 'Jean-Luc', lastName: 'Lemoine', group: 'LEM', isKid: false },
  { firstName: 'Tam', lastName: 'Nguyen', group: 'SUO', isKid: false },
  { firstName: 'Suong', lastName: 'Nguyen', group: 'SUO', isKid: false },
  { firstName: 'Thao', lastName: 'Nguyen', group: 'THA', isKid: false },
  { firstName: 'Lyes', lastName: 'Malek', group: 'THA', isKid: false },
  { firstName: 'Tiffany', lastName: 'Rault', group: 'TIF', isKid: false },
  { firstName: 'Axel', lastName: 'Tchieko Djiako', group: 'TIF', isKid: false },
  { firstName: 'Julien', lastName: 'Boisse', group: 'TIT', isKid: false },
  { firstName: 'Thanh Thuy', lastName: 'Nguyen Boisse', group: 'TIT', isKid: false },
  { firstName: 'Tracy', lastName: 'Hoang', group: 'TRA', isKid: false },
  { firstName: 'Yen', lastName: 'Nguyen Vu', group: 'TRA', isKid: false },
  { firstName: 'Lou', lastName: 'Chambonnet-Vo', group: 'CVO', isKid: true },
  { firstName: 'Ava', lastName: 'Chambonnet-Vo', group: 'CVO', isKid: true },
  { firstName: 'Anne-Marie', lastName: 'Chambonnet-Vo', group: 'CVO', isKid: false },
  { firstName: 'Dorian', lastName: 'Chambonnet', group: 'CVO', isKid: false },
  { firstName: 'Alice', lastName: 'Jedryka', group: 'JED', isKid: true },
  { firstName: 'Tu', lastName: 'Vu', group: 'JED', isKid: false },
  { firstName: 'Pierre', lastName: 'Jedryka', group: 'JED', isKid: false },
  { firstName: 'Loan', lastName: 'Vu', group: 'VIC', isKid: false },
  { firstName: 'Theo', lastName: 'Vu', group: 'VIC', isKid: false },
  { firstName: 'Vincent', lastName: 'Vu', group: 'VIC', isKid: false },
  { firstName: 'Guillaume', lastName: 'Vu', group: 'VIC', isKid: false },
  { firstName: 'Léa', lastName: 'Denis-Tran', group: 'VYT', isKid: true },
  { firstName: 'Maé', lastName: 'Denis-Tran', group: 'VYT', isKid: true },
  { firstName: 'Thao Vy', lastName: 'Tran-Pepin', group: 'VYT', isKid: false },
  { firstName: 'Maxime', lastName: 'Denis', group: 'VYT', isKid: false },
  { firstName: 'William', lastName: 'Pauly', group: 'WIL', isKid: false },
  { firstName: 'Diane', lastName: 'Wacheux', group: 'WIL', isKid: false },

  { firstName: 'Du', lastName: 'Phan', group: 'PHA', isKid: false },
  { firstName: 'Kim Anh', lastName: 'Nguyen', group: 'NKI', isKid: false },
  { firstName: 'Kim Anh\'s Hubby', lastName: 'Phan', group: 'NKI', isKid: false },
  { firstName: 'Luka', lastName: 'Phan', group: 'NKI', isKid: true },

  { firstName: 'Siu', lastName: 'Pham', group: 'SIU', isKid: false },
  { firstName: 'Jean-Luc', lastName: 'Mello', group: 'SIU', isKid: false },
]

const showFirstNameSuggestions = ref<boolean>(true)
const showLastNameSuggestions = ref<boolean>(true)
const didTry = ref<boolean>(false)
const isResponseOk = ref<boolean>(true)
const displaySuccess = ref<boolean>(false)

const attendeeHasCompany = computed(() => {
  if (!formData.attendeeFirstName) {
    return false
  }
  const attendee = findAttendeeFrom(formData.attendeeFirstName, 'firstName', formData.attendeeLastName, 'lastName')
  if (attendee) {
    return allAttendees.filter((other: Attendee) => attendee.group === other.group).length > 1
  } else {
    return false
  }
})

const requiredFields: (keyof FormData)[] = [
  'attendeeFirstName',
  'attendeeLastName',
  'eventsAttending',
  'attendeeMenu'
]

const isFormValid = computed(() => {
  return requiredFields.every(field => formData[field] && formData[field] !== '')
})

const attendeeGroup = computed(() => {
  if (!attendeeHasCompany.value) {
    return []
  }
  const attendee = findAttendeeFrom(formData.attendeeFirstName, 'firstName', formData.attendeeLastName, 'lastName')
  return allAttendees.filter((other: Attendee) => attendee?.group === other.group && attendee.firstName !== other.firstName)
})

const attendeeGroupHasChildren = computed(() => attendeeGroup.value.some((attendee: Attendee) => attendee.isKid))

const createSuggestionsUsing = (formDataKey: string, allSuggestions: Suggestion[]) => computed(() => {
  const formDataField = formData[formDataKey as keyof FormData]
  if (!formDataField) {
    return []
  }
  const lowerInput = (formDataField as string).toLowerCase()
  return allSuggestions.filter((suggestion) => suggestion.name.toLowerCase().includes(lowerInput))
    .map((suggestion) => ({ name: suggestion.name, hint: suggestion.hint }))
})

const firstNameSuggestions = createSuggestionsUsing('attendeeFirstName', allAttendees.map((attendee: Attendee) => ({
  name: attendee.firstName, hint: attendee.lastName,
})))

const lastNameSuggestions = createSuggestionsUsing('attendeeLastName', allAttendees.map((attendee: Attendee) => ({
  name: attendee.lastName, hint: attendee.firstName,
})))

async function handleSubmit() {
  if (!isFormValid.value) {
    didTry.value = true
    return
  }
  isResponseOk.value = true
  const formAsJson = JSON.stringify(formData, (key: String, value: any) => {
    if (value === null) {
      return undefined;
    }
    if (value instanceof Map) {
      return Object.fromEntries(value)
    }
    return value
  })

  try {
    const response = await fetch('https://mjh6pt0nz4.execute-api.eu-west-3.amazonaws.com/default/saveAttendeeChoice?TableName=attendeeChoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formAsJson
    })
    if (!response.ok) {
      isResponseOk.value = false
    } else {
      displaySuccess.value = true
    }
  } catch (err) {
    isResponseOk.value = false
    console.error(err)
  }
}

function updateAccompanying(group: string, firstName: string, isAccompanying: boolean) {
  const existingMember = allAttendees.find(member => member.group === group && member.firstName === firstName)

  if (existingMember) {
    if (isAccompanying) {
      formData.groupMembers.set(firstName, {
        firstName: existingMember.firstName,
        lastName: existingMember.lastName,
        menu: null,
        age: null,
      })
    } else {
      formData.groupMembers.delete(firstName)
    }
  }
}

function updateMenu(group: string, firstName: string, choice: string) {
  const existingMember = allAttendees.find(member => member.group === group && member.firstName === firstName)

  if (existingMember) {
    if (formData.groupMembers.has(firstName)) {
      const previous = formData.groupMembers.get(firstName)
      formData.groupMembers.set(firstName, {
        firstName: previous?.firstName!!,
        lastName: previous?.lastName!!,
        menu: choice,
        age: previous?.age ?? null,
      })
    } else {
      formData.groupMembers.set(firstName, {
        firstName: existingMember.firstName,
        lastName: existingMember.lastName,
        menu: choice,
        age: null,
      })
    }
  }
}

function updateChildAge(firstName: string, age: string) {
  const existingMember = allAttendees.find(member => member.firstName === firstName)

  if (existingMember) {
    if (formData.groupMembers.has(firstName)) {
      const previous = formData.groupMembers.get(firstName)
      formData.groupMembers.set(firstName, {
        firstName: previous?.firstName!!,
        lastName: previous?.lastName!!,
        menu: previous?.menu ?? null,
        age: Number.parseInt(age),
      })
    } else {
      formData.groupMembers.set(firstName, {
        firstName: existingMember.firstName,
        lastName: existingMember.lastName,
        menu: null,
        age: Number.parseInt(age),
      })
    }
  }
}

const findAttendeeFrom = (request: string, criteria: (keyof Attendee), other: string, otherCriteria: (keyof Attendee)): Attendee | undefined => allAttendees
  .find((attendee: Attendee) => attendee[criteria] === request && attendee[otherCriteria] === other)

function selectSuggestionFrom(selected: string, property: keyof Attendee, hint: string, hintProperty: keyof Attendee) {
  const selectedAttendee = findAttendeeFrom(selected, property, hint, hintProperty)
  if (selectedAttendee) {
    formData.attendeeFirstName = selectedAttendee.firstName
    formData.attendeeLastName = selectedAttendee.lastName
    formData.groupMembers = allAttendees
      .filter((attendee: Attendee) => attendee.group === selectedAttendee.group && attendee.firstName !== selectedAttendee.firstName)
      .reduce((acc: Map<string, GroupMember>, curr: Attendee) => {
        acc.set(curr.firstName, {
          firstName: curr.firstName,
          lastName: curr.lastName,
          menu: null,
          age: null,
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
    <div>
      <h3 class="sacramento">rsvp</h3>
      <p>
        Que vous veniez pour tout le week-end ou seulement pour le grand jour, nous serons honorés de vous compter parmi
        nous. <br /><br />
        Veuillez confirmer votre présence <br /> <span>avant le 15 juin</span>
        <br /><br />
        Les champs avec * sont obligatoires.
      </p>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <div class="search-dropdown">
            <label for="first-name">Prénom * (votre initiale et sélectionnez dans la liste) </label>
            <input type="text" id="first-name" class="search-input" autocomplete="false"
                   :class="{'hide-bottom' : firstNameSuggestions.length > 0 && showFirstNameSuggestions}"
                   v-model="formData.attendeeFirstName" @focus="focusOn('firstName')" @blur="blurOn('firstName')">
            <ul v-if="firstNameSuggestions.length > 0 && showFirstNameSuggestions" class="search-suggestions">
              <li v-for="firstNameSuggestion in firstNameSuggestions" :key="firstNameSuggestion.name + firstNameSuggestion.hint"
                  @mousedown="selectSuggestionFrom(firstNameSuggestion.name, 'firstName', firstNameSuggestion.hint, 'lastName')" class="suggestion-item">
                <span v-html="highlightMatch(firstNameSuggestion.name + ' ' + firstNameSuggestion.hint)"></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="form-group">
          <div class="search-dropdown">
            <label for="last-name">Nom *</label>
            <input type="text" id="last-name" class="search-input"
                   :class="{'hide-bottom' : firstNameSuggestions.length > 0 && showFirstNameSuggestions}"
                   v-model="formData.attendeeLastName" @focus="focusOn('lastName')" @blur="blurOn('lastName')">
            <ul v-if="lastNameSuggestions.length > 0 && showLastNameSuggestions" class="search-suggestions">
              <li v-for="lastNameSuggestion in lastNameSuggestions" :key="lastNameSuggestion.name + lastNameSuggestion.hint"
                  @mousedown="selectSuggestionFrom(lastNameSuggestion.name, 'lastName', lastNameSuggestion.hint, 'firstName')" class="suggestion-item">
                <span v-html="highlightMatch(lastNameSuggestion.name + ' ' + lastNameSuggestion.hint)"></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="form-group">
          <label for="event">Évènements auxquels vous allez participer *</label>
          <select id="event" name="event" v-model="formData.eventsAttending">
            <option value="">Sélectionnez une option</option>
            <option value="both">Les deux (Réception - Brunch)</option>
            <option value="reception">Réception</option>
            <option value="brunch">Brunch</option>
          </select>
        </div>
        <div class="form-group" v-if="attendeeHasCompany">
          <div>Confirmation des accompagnants *</div>
          <label class="custom-checkbox attendee-group" v-for="(member, index) in attendeeGroup" :key="index">
            <input type="checkbox" name="option" :id="'member-' + index" :value=member.firstName checked
                   @change="updateAccompanying(member.group, member.firstName, ($event.target as HTMLInputElement)?.checked)"
            >
            <span class="checkbox"></span><span class="label">{{ member.firstName }}</span>
          </label>
        </div>
        <div class="form-group">
          <div>Choix des menu *</div>
          <div class="choose-menu">
            <span class="justify-right">Pour vous</span>
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
            <span class="justify-right">Pour {{ member.firstName }}</span>
            <label class="custom-checkbox" v-if="!member.isKid">
              <input type="radio" :name="'option' + member.firstName" value="omnivore"
                     @change="updateMenu(member.group, member.firstName, 'omnivore')"
              >
              <span class="checkbox"></span><span class="label">Omnivore</span>
            </label>
            <label class="custom-checkbox" v-if="!member.isKid">
              <input type="radio" :name="'option' + member.firstName" value="vegan"
                     @change="updateMenu(member.group, member.firstName, 'vegan')"
              >
              <span class="checkbox"></span><span class="label">Vegan</span>
            </label>
            <label class="custom-checkbox" v-if="member.isKid">
              <input type="radio" :name="'option' + member.firstName" value="kid"
                     @change="updateMenu(member.group, member.firstName, 'kid')"
              >
              <span class="checkbox"></span><span class="label">Enfant</span>
            </label>
          </div>
        </div>
        <div class="form-group" v-if="attendeeGroupHasChildren">
          <div>Veuillez renseigner l'âge des enfants. *</div>
          <div v-for="member in attendeeGroup">
            <div v-if="member.isKid" class="choose-age">
              <label :for="'age' + member.firstName" class="justify-right">Pour {{ member.firstName }}</label>
              <input type="number" :id="'age' + member.firstName" @change="updateChildAge(member.firstName, ($event.target as HTMLInputElement)?.value)">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="diet">Avez-vous des restrictions alimentaires ? </label>
          <input type="text" id="diet" v-model="formData.dietRestriction">
        </div>
        <div class="form-group">
          <label for="questions">Des questions ou commentaires ?</label>
          <input type="text" id="questions" v-model="formData.questions">
        </div>
        <p v-if="!isFormValid && didTry">Tous les champs requis doivent être renseignés</p>
        <p v-if="displaySuccess">Votre réponse a bien été prise en compte. A très vite !</p>
        <p style="color: red" v-if="!isResponseOk">Une erreur est survenue, réessayer plus tard ou contactez Hieu.</p>
        <div class="validate">
          <button type="submit">Validez</button>
        </div>
      </form>
    </div>
    <div class="desktop-img">
    </div>
  </main>
</template>

<style scoped>
main {
  background: var(--color-champagne);
  overflow-x: hidden;
  margin-top: 10vh;
}

.desktop-img {
  display: none;
}

@media screen and (min-width: 600px) {
  main {
    display: grid;
    grid-template-columns: 55% auto;
  }

  .desktop-img {
    display: block;
    background-image: url("@/assets/IMG_9991.JPG");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
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


@media screen and (min-width: 600px) {
  select {
    padding: 2vh 2vw;
  }
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

@media screen and (min-width: 600px) {
  input {
    padding: 2vh 2vw;
  }
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

@media screen and (min-width: 600px) {
  .search-input {
    padding: 2vh 2vw;
  }
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

@media screen and (min-width: 600px) {
  .suggestion-item {
    padding: 1.75vh 2vw;
  }
}

.hide-bottom {
  border-radius: 10px 10px 0 0;
}

.choose-menu {
  display: grid;
  grid-template-columns: 25% repeat(auto-fit, minmax(100px, 1fr));
}

@media screen and (min-width: 600px) {
  .choose-menu {
    grid-template-columns: 20% 30% 30% auto;
  }
}

.choose-menu span {
  color: black;
  padding-bottom: 0.65em;
}

.attendee-group {
  padding: 0.35vh 0;
}

.choose-age {
  display: grid;
  grid-template-columns: 25% repeat(auto-fit, minmax(100px, 1fr));
}

.choose-age label {
  color: black;
  font-weight: normal;
  padding-top: 0.5em;
  padding-right: 0.5em;
  font-size: 1rem;
}

.choose-age input {
  padding: 1.2vh 4vw;
  font-size: 1rem;
  font-weight: 500;
}

@media screen and (min-width: 600px) {
  .choose-age {
    grid-template-columns: 20% 30% 30% auto;
  }

  .choose-age input {
    padding: 1vh 1.2vw;
  }
}

.justify-right {
  justify-content: flex-end;
  text-align: right;
}

#event {
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
}

</style>
