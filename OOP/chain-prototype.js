'use strict'

const Book = function(title, author) {
	this.title = title;
	this.author = author;
	this.isRead = false;
}

const lordOfTheRings = new Book('LordOfTheRings', 'Qwop');

// создание пустого объекта
// вызов конструктора - функции
// связывание с прототипом (св-во __прото__, которое связывается с общим прототипом)
// возврат объекта с ссылкой на свой прототип

console.log(lordOfTheRings.isRead);