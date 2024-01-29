// LibraryItem
// conctrutor
// id title
// isAvailable
// все свойства приватные
class LibraryItem {
  #id
  #title
  #isAvailable
  #amount
  #price
  constructor(id, title, isAvailable, amount, price) {
    this.#id = id
    this.#title = title
    this.#isAvailable = isAvailable
    this.#amount = amount
    this.#price = price
  }
  get id() {
    return this.#id
  }
  get title() {
    return this.#title
  }
  get isAvailable() {
    return this.#isAvailable
  }
  get itemInformation() {
    return `id is ${this.#id} and title is ${this.#title}`
  }
  get sum() {
    return this.#amount * this.#price
  }

  set id(newId) {
    this.#id = newId
  }
  set title(newTitle) {
    this.#title = newTitle
  }

  set isAvailable(newStatus) {
    this.#isAvailable = newStatus
  }
}

const libraryInstance = new LibraryItem(1, 'book', true, 3, 100)
// используем геттер для того чтобы получить данные
// геттер эта функция - но мы используем его как просто свойство
console.log(libraryInstance.sum)
// геттеры для все свойств

// сеттеры для свойств

//когда заносим в сеттер id не число, то у нас вывводится ошибка в консоль, id должно быть числом
