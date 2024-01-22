// Classes
// служат для воспроизводства одинаковых/ похожих объектов
// объекты имеют одинаковые поля/свойства

// функция конструктор
// 1. всегда начинается с большой буквы
function User1(name) {
  this.name = name
}

// 2. Она всегда вызывается при помощт new
const firstUser = new User1('Ivan')
// при вызове new - вызывается конструктор
// this - контекст выполнения кода
// this - это объект перед точкой

// функции конструкторы --> класс
// es06
// функция внутри объекта  - метод
// class User {
//   init(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

class User {
  // constructor функция, кот, вызывается при вызове new
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
// secondUser - экземпляр класса, инстанс instance
// присваивание слева направо и по очереди
const secondUser = new User('Peter', 30)

class Admin extends User {}
const firstAdmin = new Admin()
console.log(firstAdmin)

//  Объект класс самый первый в прототипе
// уже все остальное наследуется от него

class Animals {}

class DomestiqueAnimals extends Animals {
  //можно на диван
  // любимые игрушки
}

class WildAnimals extends Animals {
  // среда обитания
}

class Dog extends DomestiqueAnimals {
  // bark лаять
  // гуляет на поводке
}

const dog = new Dog()
console.log(dog)

// все методы и свойства родителей переходят к детям

// Создать класс кот называется Media и в конструкторе одно свойство name
