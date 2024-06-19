'use strict';
/*
	Создать класс со здоровьем и методом получения урона
	Сделать класс меча, который имеет силу и метод нанесения урона
	Сделать класс орка, который в 50% не получает урон
 */

class Enemy {
	health
	constructor(health) {
		this.health = health;
	}
	receiveDamage(damage){
		this.health = this.health - damage;
		console.log(this.health)
	}
}

class Sword {
	#damage;
	constructor(damage) {
		this.damage = damage;
	}
	strike(enemy){
		enemy.receiveDamage(this.damage);
	}
}

class Orc extends Enemy {
	constructor(health) {
		super(health);
	}

	receiveDamage(damage){
		if (Math.random() > 0.5) {
			this.health = this.health - this.damage / 2;
		}
		console.log(this.health)
	}
}

const enemyOne = new Enemy(1000);
const swordOne = new Sword(200);
swordOne.strike(enemyOne);
swordOne.strike(enemyOne);