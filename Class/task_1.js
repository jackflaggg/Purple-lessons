/*
Реализовать класс пользователя, свойства - логин, пароль.
Пароль должен переворачиваться и в таком виде храниться.
Пароль и логин изменить нельзя.
Методы: Смена пароля(старый и новый) и Проверка пароля
 */

class User {
	#login;
	#password;

	constructor(login, password) {
		this.#login = login;
		this.#password = this.reversePassword(password);
	}

	reversePassword(password) {
		return String(password).split('').reverse().join()
	}

	checkPassword(password){
		return this.#password === this.reversePassword(password);
	}

	changePassword(oldPassword, newPassword){
		if (this.checkPassword(oldPassword)){
			this.#password = this.reversePassword(newPassword);
			console.log(true)
		} else {
			console.log(false)
		}
	}

	get getLogin() {
		return this.#login;
	}

	set password(newPassword) {
		console.log('You cannot change the password directly.');
	}

	get password() {
		console.log('You cannot directly access the password.');
	}
}

const newUser = new User('jackflagg', '123');
console.log(newUser.getLogin)
console.log(newUser.checkPassword(123));
console.log(newUser.changePassword(123, 456))
console.log(newUser.checkPassword(456));