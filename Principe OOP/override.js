'use strict';
class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	buy() {
		console.log('but')
	}
}

const book1 = new Book('x', 'y')
book1.buy();

class EBook extends Book {
	constructor(title, author, pages) {
		super(title, author);
		this.pages = pages;
	}
}

const book2 = new Book('z', 'a')
book2.buy();