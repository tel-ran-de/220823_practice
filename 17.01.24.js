const user = {
  name: 'Ivan',
  age: 40,
  city: undefined,
  degree: null,
  adress: {
    street: 'Strasse',
    house: 9,
    appartement: 10,
  },
  married: true,
  stack: ['react', 'javascript', 'css'],
}

const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 78 },
  { name: 'Doe', grade: 90 },
  { name: 'Smith', grade: 76 },
  { name: 'Chris', grade: 81 },
]

// 2. Отсортировать студентов по оценкам от высоких к низким
students.sort(function (a, b) {
  console.log('a: ', a)
  console.log('b: ', a)
  console.log('оценка а: ', a.grade)
  console.log('оценка b: ', b.grade)
  return a.grade - b.grade
})

console.log(students)
// forEach - вывести оценки в консоль
//students.forEach((el) => console.log(el.grade))
// 0. отфильровать студентов с оценкой больше 85
const newStudents = students.filter(function (el) {
  return el.grade >= 85
})

// map + reduce
// 1. вернуть массив кот содержит оценки/ reduce посчитать сумму этих оценок
const grades = students
  .map((el) => el.grade)
  .reduce((accumulator, currentValue) => accumulator + currentValue)

// 3. посчитать общую сумму каждого товара - общая стоимость бананов (цена на количество)
// вернуть общую стоимость товаров в корзине
const cartItems = [
  { name: 'Apple', price: 2, quantity: 3 },
  { name: 'Banana', price: 8, quantity: 5 },
  { name: 'Orange', price: 6, quantity: 2 },
]

// map
const total = cartItems
  .map((el) => el.price * el.quantity)
  .reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(total)

// 4. Отфильтровать в диапазоне
const products = [
  { name: 'Apple', price: 15 },
  { name: 'Banana', price: 8 },
  { name: 'Cherry', price: 3 },
  { name: 'Grape', price: 22 },
  { name: 'Orange', price: 12 },
]
products[0].name
products[0].price
const minPrice = 10
const maxPrice = 20

// 5. Найти самый дорогой товар используя reduce
