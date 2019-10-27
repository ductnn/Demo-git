function Cat(argument) {
	// body...
	this.stomach = [];
}

Cat.prototype.eat= function(mouse) {
	// body...
	this.stomach.push(mouse);
};

module.exports = Cat;