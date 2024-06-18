'use strict';

class BookClass {
	isRead = false;

	constructor(title, author){
		this.title = title;
		this.author = author;
	}

	read() {
		this.isRead = true;
	}
}

const bookOne = new BookClass('book', 'genrih');
bookOne.read()
console.log(bookOne)