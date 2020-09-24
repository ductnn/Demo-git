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

bird.prototype.saySomething = function() {
	// body...
	console.log('Iam 2222222222222222222');
};

module.exports = bird;