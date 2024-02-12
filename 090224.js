const root = document.querySelector('#root')
const productsContainer = document.createElement('div')
const themeButton = document.querySelector('#change-color')
root.append(productsContainer)
productsContainer.classList.add('products-container')

const productClasses = localStorage.getItem('theme')

if (productClasses) productsContainer.className = productClasses

themeButton.addEventListener('click', () => {
  productsContainer.classList.toggle('dark')
  localStorage.setItem('theme', productsContainer.className)
})

const showUsers = (arrayOfObjects) => {
  arrayOfObjects.forEach((product) => {
    const titleContainer = document.createElement('div')
    titleContainer.innerText = product.title
    productsContainer.append(titleContainer)
  })
}

const showError = (error) => {
  const errorContainer = document.createElement('div')
  errorContainer.innerText = error
  errorContainer.style.color = 'red'
  root.append(errorContainer)
}

// async / await  - синтаксический сахар
// promises - async await - инструмент позволяет упростить работу

const getUsers = (callback) => {
  fetch('https://dummyjson.com/products/')
    .then((response) => response.json()) // распарсил из  JSON
    .then((data) => callback(data.products))
    .catch((error) => console.log(error))
    .finally(() => console.log('do smthg'))
}

// async /await - НИЧЕГО НОВОГО Но УДОБНО
// async await используется в функциях
// надстройка для работы с асинхронными функциями

// throw - бросить/выбросить/кинуть
const getUsersWithAsync = async (callback, callbackForError) => {
  try {
    const response = await fetch('https://dummyjson.com/products/')
    if (!response.ok) throw new Error('НЕ ПОЛУЧИЛОСЬ НАЙТИ ПРОДУКТЫ')
    const data = await response.json() // распарсил из  JSON
    callback(data.products)
  } catch (error) {
    console.log(error)
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
    callbackForError(error.message)
  }
}

getUsersWithAsync(showUsers, showError)

console.log('first')
Object, Array, Promise, Error

//Promise(function (resolve, reject) {})
// const obj = {}
// obj.map()

//  У МЕНЯ ВООБЩЕ НИЧЕГО НЕ РАБОТАЕТ
console.log('after')
TypeError // пытаемся приметод метод кот не присвоен типу
ReferenceError // not defined, not found - отсылка
SyntaxError // забыли запятую скобку кавычку
