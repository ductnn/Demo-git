function bird(argument) {
	// body...
	this.stomach = [];
}

bird.prototype.eat= function(mouse) {
	// body...
	this.stomach.push(mouse);
};

bird.prototype.saySomething = function() {
	// body...
	console.log('Iam flyingggggggggg');
};

module.exports = bird;