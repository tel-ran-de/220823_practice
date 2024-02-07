//1. Написать функцию getUsers(), которая фетчит данные пользователей
//  с 'https://dummyjson.com/users' и выводит в консоль
const button = document.querySelector('#get')
const root = document.querySelector('#root')
console.log('BEFORE')

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then(console.log)

function getUsers() {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then(console.log)
}

// const start = Date.now()

// while (true) {
//   const current = Date.now()
//   if (current - start > 5000) {
//     break
//   }
// }

const div = document.createElement('div')
root.append(div)
div.innerText = 'HELLO'
console.log('AFTER')
button.addEventListener('click', getUsers)

// fetch()
// async await
// try catch finally
