'use strict';

/*
Создать класс Car - марка, модель, пробег(приватное , задаются в конструкторе)
Сделать возможность меня пробег через гет и сет.
Добавить метод info, который выводит в консоль всю информацию о машине
 */

class Car {
	#mark;
	#model;
	#mileage;
	constructor(mark, model, mileage){
		this.#mark = mark;
		this.#model = model;
		this.#mileage = mileage;
	}

	get changeMileage(){
		return this.#mileage;
	}

	set changeMileage(newMileage) {
		this.#mileage = newMileage;
	}

	info(){
		console.log(`information about car: mark - ${this.#mark}, model - ${this.#model}, mileage - ${this.#mileage}`);
	}
}

const newCar = new Car('Lada', 'Kalina', 146000);
console.log(newCar.changeMileage)

newCar.changeMileage = 150000;
console.log(newCar.changeMileage)
newCar.info()