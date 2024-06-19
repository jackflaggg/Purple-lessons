'use strict';

class Film {
	#name;
	#author;
	rating;
	#length;

	constructor(name, author, length) {
		this.#name = name;
		this.#author = author;
		this.#length = length;
	}
	get name(){
		return this.#name;
	}

	get author(){
		return this.#author;
	}

	get rating(){
		return this.rating;
	}
}

const filmOne = new Film('Grom', 'Russia', 125);
console.log(filmOne.name);