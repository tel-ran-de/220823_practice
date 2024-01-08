// массив - элемент - индекс
// массив содержит люббой тип данных

// добавить в массив элемент
// push -

// splice -
const arr = [1, 3, 4, 6]
arr.push(100) // в конец
arr.unshift(200) // в начало

arr.splice(0, 0, 300)
console.log(arr)

// pop - последний элемент удаляет
// shift - удаляет первый

arr.slice(1, 4) // принимает два индекса первый и последний
arr.splice(start) // индекс и колво элементов
// slice не изменяет исходный массив
// splice позволяет добавить новые элементы

const animals1 = ['ant', 'bison', 'camel']
const animals2 = ['duck', 'elephant']

animals1.concat(animals2)
animals2.concat(animals1)

const str = 'Harry'
console.log(str.indexOf('b')) // -1

console.log(str.startsWith('H'))

const str1 = 'Harry Potter'
const arr3 = str1.split(' ')
console.log(arr3.join(' '))

// toLowerCase() - low - низкий
// Upper - up - вверх
// toUpperCase()

trim() // удаляет пробелы в начале и конце у строк

// forEach() - какие параметры принимает
// forEach - принимает колбек функцию
//
// параметры колбека element, index, array
// forEach - undefined
const array1 = [1, '2', 3]

const newArray1 = array1.forEach((el) => Number(el)) // все элементы массива становятся числами
const newArray12 = array1
  .map((el) => Number(el))
  .filter(function (el) {
    return el % 2 === 0
  })
// console.log(typeof 2 === 'number')

// console.log(typeof '2' === 'string')
console.log(newArray12)
// поскольку у нас ничего не возвращается
// не создается новая ячейка памяти
// экономим место -->  forEach менее затратный метод
console.log('2' % 2 === 0)

// 0. оставить нечетные числа
const numbers111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterdNumbers = numbers111.filter(
  (element) => element % 2 !== 0 // true / false
)

// 1. сформируйте массив из чисел, которые меньше 30.
const numbers1111 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
const fa = numbers1111.filter(function (el) {
  return el < 30
})
console.log(fa)

// 2. Отфильтровать строки длинее 5 символов
const words = ['apple', 'cat', 'banana', 'dog', 'elephant', 'car', 'bat']

words.filter((el) => el.length > 5)

// 3. Оставить только строки
const mixedTypes = [123, 'apple', { fruit: 'apple' }, 'banana', true, 'car', false]
mixedTypes.filter((el) => typeof el === 'string')

// 4. Офильтровать строки которые начинаются на a
const words2 = ['apple', 'banana', 'apricot', 'grape', 'avocado', 'kiwi']

words2.filter((el) => startsWith)

//  5. Отфильтровать строки, которые НЕ содержат букву e
const words3 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi']
// includes
const fw = words3.filter((el) => !el.includes('e'))
console.log(fw)

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 78 },
  { name: 'Doe', grade: 90 },
  { name: 'Smith', grade: 76 },
  { name: 'Chris', grade: 81 },
]

students.filter()
// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8]
