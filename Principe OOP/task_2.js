'use strict';
/*
Создать базовый класс перса с параметрами: раса, имя, язык, метод-говорить.
Создать класс Орка, который наследуется от перса, у которого есть оружие и который имеет метод - удара.
Создать класс Эльфа, который наследуется от перса, у которого есть типа заклинаний и метод - создание заклинаний.
*/

class Person {
	constructor(race, name, language) {
		this.race = race;
		this.name = name;
		this.language = language;

	}

	#say() {
		console.log(`Hello, I am ${this.name}, speaking ${this.language}`);
	}

	talk() {
		this.#say()
	}
}

class Orc extends Person {
	constructor(race, name, language, weapon) {
		super(race, name, language);
		this.weapon = weapon;
	}

	punch() {
		console.log(`Smashhhhhh!!!`);
	}

	talk() {
		console.log(`Hello, GRRRRRRRR, I ${this.name}, speaking ${this.language}, GRRRRRRR!!!!`);
	}
}

class Elph extends Person {
	constructor(race, name, language, spell) {
		super(race, name, language);
		this.spell = spell;
	}

	createSpell() {
		console.log('I am create!!!!')
	}

	talk() {
		console.log('now!')
	}
}

const newPers = new Person('Human', 'Alice', 'English');
newPers.talk();

const newOrc = new Orc('Ogre', 'Bucher', 'GR');
newOrc.talk();
newOrc.punch();

const newElph = new Elph('Elph', 'Legolas', 'E');
newElph.talk();
newElph.createSpell()