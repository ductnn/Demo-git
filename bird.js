function bird(argument) {
	// body...
	this.stomach = [];
}

bird.prototype.eat= function(mouse) {
	// body...
	this.stomach.push(mouse);
};

module.exports = bird;