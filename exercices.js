// 1. создать функцию, которая будет вставлять имя пользователя в строку

const age = 30

console.log(`I am ${age} years old`)

// одинарные двойные ковычки для строк
const str = 'string'
const str2 = 'string2'

// косые скобки позволяют вставлять в строку javascript code
// js code находится в ${}
console.log(`${30 + 30}`)

const firstName = 'Ivan'
console.log(`My name is ${firstName}`)

// 1. создать функцию, которая будет вставлять имя пользователя в строку
// параметр name
// возвращаем Привет имя!
// возвращаем - return (вернуть)

// 1.2 добавить второй параметр - возраст - Привет ___! вам __ лет

const userName = 'Ivan'
const userAge = 20

function userInformation(name, age) {
  return `Привет ${name}! Вам ${age} лет`
}
// чтобы функция отработала надо ее вызвать
// чтобы увидеть результат в консоли надо вывести в консоль
// console.log - выводит в консоль данные
console.log(userInformation('Ivan', 20))

// функция может быть переиспользована
const a = 1
// КОНСОЛЬ - ИНСТРУМЕНТ ДЕБАГ (DEBUG) отладка кода

// 2. написать функцию, которая будет вовращать true / false
// если число делится на 3

// функция devisionByThree
// парметр - number
// остаток от деления на 3 - %
// возвращает true / false

function devisionByThree(number) {
  return number % 3 === 0
}

// 3. написать функцию которая проверяет больше число нуля или нет
// если больше true
// moreThanZero
function moreThanZero(number) {
  return number > 0
}

// 4. проверить возраст клиента, можно ли ему продавать алкоголь
// age больше 18
// sellAlcohol
// возвращаем boolean

// принимает второй параметр license
// если есть документ и больше 18
// license - булевое значения

// Оператор  И
function sellAlcohol(age, license) {
  return age >= 18 && license
}

console.log(sellAlcohol(18, true))
console.log(sellAlcohol(17, true))
console.log(sellAlcohol(18, false))
console.log(sellAlcohol(17, false))

// 7. написать функцию, которая проверяет является ли тип данных строкой
// параметр data
// isString
// typeof data
// === 'string'
// возвращается буллевое значение

function isString(data) {
  return typeof data === 'string'
}
// typeof служебное слово которое возвращает тип данных стоящих после
// в виде строки

console.log(isString({}))
console.log(isString('ss'))
isString(500)
isString(true)

console.log(typeof 'ssss' === 'string')
console.log(typeof 4 === 'string')
console.log(typeof {})

//8. написать функцию которая проверяет является ли три числа cторонами трeугольника
isTriangle
// три стороны
// булевое значение
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b
}

console.log(isTriangle(1, 4, 5))
