const form = document.querySelector('form')
const nameInput = document.querySelector('#userName')
const ageInput = document.querySelector('#userAge')

// при загрузке страницы достали данные из LS
const nameFromStorage = localStorage.getItem('userName')
const ageFromStorage = localStorage.getItem('userAge')
// если они там есть подставить в value
if (nameFromStorage) nameInput.value = nameFromStorage
if (ageFromStorage) ageInput.value = ageFromStorage

form.addEventListener('submit', (event) => {
  event.preventDefault()

  localStorage.setItem('userName', nameInput.value)
  localStorage.setItem('userAge', ageInput.value)

  nameInput.value = ''
  ageInput.value = ''
})
