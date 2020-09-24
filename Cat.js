var chalk = require('chalk'); 

function Cat(argument) {
	// body...
	this.name = name
	this.stomach = [];
}

Cat.prototype.eat= function(mouse) {
	// body...
	this.stomach.push(mouse);
};

Cat.prototype.saySomething = function() {
	// body...
	console.log('Hello world' + chalk.blue(this.name));
};

Cat.prototype.saySomething = function() {
	// body...
	console.log('Hello !!!!!!!!!!!');
};

module.exports = Cat;