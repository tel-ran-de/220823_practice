import { users } from './utils/users.js'

const root = document.querySelector('#root')
const header = document.createElement('header')
root.append(header)

const userContainer = document.createElement('div')
userContainer.classList.add('user-container')
root.append(userContainer)

// THEME
const themeButton = document.createElement('button')
themeButton.innerHTML = 'change color'
header.append(themeButton)

themeButton.addEventListener('click', function () {
  root.classList.toggle('dark')
})

// ОТРИСОВКА ПОЛЬЗОВАТЕЛЕЙ
const renderUsers = (arrayOfUsers) => {
  arrayOfUsers.forEach((user) => {
    const userCard = document.createElement('div')

    const userName = document.createElement('h1')
    userName.innerText = user.name

    const userAge = document.createElement('h2')
    userAge.innerText = user.age

    const userCity = document.createElement('p')
    userCity.innerText = user.city

    userCard.append(userName, userAge, userCity)
    userCard.classList.add('user-card')

    userContainer.append(userCard)
  })
}

renderUsers(users)
