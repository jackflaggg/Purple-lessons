/*
Создать базовый класс перса с параметрами: раса, имя, язык, метод-говорить.
Создать класс Орка, который наследуется от перса, у которого есть оружие и который имеет метод - удара.
Создать класс Эльфа, который наследуется от перса, у которого есть типа заклинаний и метод - создание заклинаний.
*/

function Pers(race, name, language) {
	this.race = race;
	this.name = name;
	this.language = language;
}

Pers.prototype.say = function(){
	console.log(`Hello, I am ${this.name}, speaking ${this.language}`);
};

function Orc(race, name, language, weapon){
	this.weapon = weapon;
	Pers.call(this, race, name, language);
}

Orc.prototype = Object.create(Pers.prototype);

Orc.prototype.punch = function(){
	console.log(`Smashhhhhh!!!`);
};

function Elph(race, name, language, spell){
	this.spell = spell;
	Pers.call(this, race, name, language);
}

Elph.prototype = Object.create(Pers.prototype);

Elph.prototype.createSpell = function(){
	console.log(`I am create a ${this.spell}`)
};

const persOne = new Pers('Human', 'Alice', 'English');
const ogreOne = new Orc('Ogre', 'Butcher', 'Growl', 'knuckledusters');
const elphOne = new Elph('Elph', 'Legolas', 'Elphis', 'onion');


console.log(Object.getPrototypeOf(Pers.prototype.constructor))
console.log(Object.getPrototypeOf(Orc.prototype.constructor))
console.log(Object.getPrototypeOf(Elph.prototype.constructor))
// persOne.say()
// ogreOne.punch()
// elphOne.createSpell()
//
// console.log(ogreOne)
// console.log(elphOne)