'use strict';

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	static buy() {
		console.log('but')
	}
}

class AudioBook extends Book {
	constructor(title, author, lenMin) {
		super(title, author);
		this.lenMin = lenMin;
	}

	static log(){
		console.log('log');
	}
}

AudioBook.buy()