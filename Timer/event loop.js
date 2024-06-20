const fs = require('fs');
console.log('init!');

setTimeout(function () {
	console.log(performance.now(), ' : Timer 0')
}, 0);

setImmediate(() => {
	console.log('im')
});

fs.readFile(__filename, () => {
	console.log('file read')
})
console.log('final!')