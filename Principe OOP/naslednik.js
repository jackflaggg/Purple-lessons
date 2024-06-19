'use strict';

const Book = function(title, author) {
	this.title = title;
	this.author = author;
}

Book.prototype.buy = function( ) {
	console.log('but')
}

const AudioBook = function(title, author, lenMin){
	Book.call(this, title, author);
	this.lenMin = lenMin;
}
AudioBook.prototype = (Book.prototype);
const newBook = new AudioBook('LORD', 'TOLKIEN', 20 * 60);

console.log(newBook.buy());