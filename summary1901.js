const root = document.querySelector('#root')

// const classList = {
//   add: function () {},
//   remove: function () {},
// }

// classList - специальный объект со своими методами
root.classList.add('container')
root.classList.remove('container') // удаляет
// переписывается предыдщуий класс
// root.setAttribute('class', 'dark')
//root.className = 'dark' //  используется к Реакте, потому что class зарезервировано за классами

// root.classList.toggle()

const themeButton = document.createElement('button')
themeButton.innerHTML = 'change color'
root.append(themeButton)

themeButton.addEventListener('click', function () {
  root.classList.toggle('dark')
})

// создать userCard div
const userCard = document.createElement('div')
root.append(userCard)
// три поля - имя h1, возраст h2, город p
const userName = document.createElement('h1')
userName.innerText = 'Peter'

const userAge = document.createElement('h2')
userAge.innerText = 42
const userCity = document.createElement('p')
userCity.innerText = 'Munich'
userCard.append(userName, userAge, userCity)
userCard.classList.add('user-card')

// root.innerHTML = '<h1>CARD</h1>' небезопасно
// createElement создаем элемент
// innerText - для наполнения
// append - крепим к родителю к root
// добавить класс к карточке .user-card

// создать файл css добавить классы
