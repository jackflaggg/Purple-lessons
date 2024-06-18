'use strict'

const product = { id: 1, name: 'Bread', count: 1 };
const productTwo = { id: 2, name: 'hh', count: 2 };


function Cart() {
	this.products = [];
}

Cart.prototype.AddProduct = function(product) {
	if (this.products.findIndex(p => p.id === product.id) !== -1) {
		return;
	}
	this.products.push(product);
}

Cart.prototype.increaseAmount = function(idProducts) {
	const findProduct = this.products.find(p => p.id === idProducts);
	if (findProduct) {
		findProduct.count++
	}
}

Cart.prototype.decreaseAmount = function(idProducts) {
	const findProduct = this.products.find(p => p.id === idProducts);
	if (findProduct) {
		findProduct.count--
	}
	this.products = this.products.filter(p => p.count > 0 )
}

const products = new Cart();
products.AddProduct({...product});
products.AddProduct({...productTwo});

products.increaseAmount(1);
products.decreaseAmount(1);
products.decreaseAmount(1);

console.log(products.products)