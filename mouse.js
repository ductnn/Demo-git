function mouse(name) {
	// body...
	this.name = name;
	this.dead = false;
}

mouse.prototype.die = function() {
	// body...
	this.dead = true;
};

module.exports = mouse;