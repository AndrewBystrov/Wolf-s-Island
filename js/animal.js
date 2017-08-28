'use strict'

class Animal {

	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	move() {

	}

	display() {
		var img = $("<img></img>")
		$(img).attr('src',this.imagePath);
		$(img).css('position','absolute');
		$(img).css('left', this.x * 40 + 4)
		$(img).css('top', this.y * 40 + 4);
		$('#island').append($(img))
	}
}

class Rabbit extends Animal {
	constructor(x,y) {
		super(x,y)
		super.imagePath = "resources/rabbit.png"
	}

	move() {

	}
}

class Wolf extends Animal {
	constructor(x,y) {
		super(x,y)
		super.imagePath = "resources/wolf.png"
	}

	move() {

	}

}