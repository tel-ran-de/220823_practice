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
