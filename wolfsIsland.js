'use strict'

var DIRECTION = [0,1,2,3,4,5,6,7]



$(document).ready(function() {

	$('button.settings').click(
		function(event) {
			console.log('a')
			$('#expandedSettings').toggle(1);
		},
	)

})

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
	}
}

class Rabbit extends Animal {
	constructor(x,y) {
		super(x,y)
		super.imagePath = "resources/wolf.png"
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