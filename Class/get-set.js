'use strict';

// const task = {
// 	title: 'task1',
// 	dueTo: new Date('2023/01/01'),
//
// 	get isOverDue() {
// 		return this.dueTo.getTime() < new Date().getTime();
// 	},
// 	set isOverDue(isOver) {
// 		if (!isOver) this.dueTo = new Date().getTime();
// 	},
// }
// console.log(task.isOverDue);
//
// task.isOverDue = false;
//
// console.log(task);

class Task {
	constructor(title, dueDate){
		this.title = title;
		this.dueDate = dueDate;
	}
	get isOverdue(){
		return this.dueDate < new Date().getTime()
	}
	set dueDate(date) {
		if (date < new Date()) return;
		this._dueDate = date;
	}
}

const taskClass = new Task('task One', new Date())
console.log(taskClass.dueDate = new Date('2025/01/01'));

// class Example {
// 	_protectedProperty = 42;
// 	#privateProperty = 'secret!'
//
// 	get getProtectedProperty() {
// 		return this._protectedProperty;
// 	}
//
// 	get getPrivateField() {
// 		return this.#privateProperty;
// 	}
// }
//
// const instance = new Example();
// console.log(instance)
