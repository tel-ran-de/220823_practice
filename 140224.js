const root = document.querySelector('#root')
const form = document.querySelector('form')
const nameInput = document.querySelector('#userName')
const ageInput = document.querySelector('#userAge')

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Alice', age: 25 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Emily', age: 28 },
  { id: 5, name: 'David', age: 40 },
]

// возьми данные и LS, если их там нет то поставь массив по дефолту
const usersFromStorage = JSON.parse(localStorage.getItem('users')) || users

const showUsers = (arrayOfObjects) => {
  root.innerHTML = ''
  arrayOfObjects.forEach((user) => {
    const titleContainer = document.createElement('div')
    titleContainer.innerText = user.name
    root.append(titleContainer)
  })
}

showUsers(usersFromStorage)

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const newUser = {
    id: Math.random(),
    name: nameInput.value,
    age: ageInput.value,
  }
  // добавление нового пользотеля в массив
  usersFromStorage.push(newUser)
  // перерисовка нового массиа
  showUsers(usersFromStorage)
  // сохранение в LS
  localStorage.setItem('users', JSON.stringify(usersFromStorage))

  nameInput.value = ''
  ageInput.value = ''
})

// при добавлении нового пользователя в массив мы новый массив
// сохраняем в LocalStorage

// загружаем страницу, провряем в LS есть данные или нет
// если есть, то мы их отрисовываем, если тх нет то отрисовываем дфеолтный массив
