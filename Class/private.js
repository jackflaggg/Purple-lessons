'use strict';

class Car {
	#test1
	#test2

	constructor() {
		this.#test1 = 5;
		this.#test2 = 6;
	}
	#changeVin() {
		console.log('changed')
	}

	get test() {
		this.#changeVin()
	}
}

const newCar = new Car()
console.log(newCar)