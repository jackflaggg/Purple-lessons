'use strict';

const task = {
	title: 'task1',
	dueTo: new Date('2023/01/01'),

	get isOverDue() {
		return this.dueTo.getTime() < new Date().getTime();
	},
	set isOverDue(isOver) {
		if (!isOver) this.dueTo = new Date().getTime();
	},
}
console.log(task.isOverDue);

task.isOverDue = false;

console.log(task);

class Task {
	constructor(title, dueTo){
		this.title = title;
		this.dueTo = dueTo;
	}
	get isOverdue(){
		return this.dueTo < new Date().getTime()
	}
	set dueDate(date) {
		if (date < new Date()) return;
		this.dueTo = date;
	}
}

const taskClass = new Task('task One', new Date())
console.log(taskClass.dueDate = new Date('2024/01/01'));


