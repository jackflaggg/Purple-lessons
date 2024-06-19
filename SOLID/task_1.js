'use strict';

/*
	Спроектируйте класс биллинг со свойством amount и методом calculateTotal для расчета счета
	Сделать разный calculateTotal для разных типов:
	1) fixBilling - нужно вернуть amount как рез-т
	1) hourBilling - считает amount * число часов
	1) itemBilling - считает amount * число элементов
	Соблюдать принцип открытости и закрытости
 */

class Billing {
	constructor(amount){
		this.amount = amount;
	}

	calculateTotal(){
		return this.amount;
	}
}

class fixBilling extends Billing {
	constructor(amount) {
		super(amount)
	}

	calculateTotal() {
		return this.amount
	}
}

class hourBilling extends Billing {
	constructor(amount) {
		super(amount)
	}

	calculateTotal(h) {
		return this.amount * h
	}
}

class itemBilling extends Billing {
	constructor(amount) {
		super(amount)
	}

	calculateTotal(i) {
		return this.amount * i
	}
}

const billing = new Billing(22);
const fixbilling = new fixBilling(22);
const hourbilling = new hourBilling(22);
const itembilling = new itemBilling(22);

console.log(billing.calculateTotal());
console.log(fixbilling.calculateTotal());
console.log(hourbilling.calculateTotal(3));
console.log(itembilling.calculateTotal(4));