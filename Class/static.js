'use strict';

class Human {
	static a = 1;
	static sum(a, b){
		return a + b;
	}
	constructor(a, b) {
		this._a = a;
		this._b = b;
	}
}

console.log(Human.sum(1, 2));

const newHuman = new Human(2, 2);
console.log(newHuman);