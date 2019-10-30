var chalk = require('chalk'); 

function Dog(name) {
	// body...
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(Cat) {
	// body...
	this.stomach.push(Cat);
};

Dog.prototype.saySomething = function() {
	// body...
	console.log('Hello world' + chalk.blue(this.name));
};

module.exports = Dog;