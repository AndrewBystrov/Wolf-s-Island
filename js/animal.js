'use strict'

class Animal {

	constructor(x,y, world) {
		this.x = x;
		this.y = y;
		this.world = world;
	}

	move() {
		if (this.needMove()) {
			var direction = this.world.moveAnimal(this);
			var xOffset = direction.x;
			var yOffset = direction.y;

			var l = xOffset > 0 ? "+="+(xOffset*40) : "-=" + Math.abs((xOffset*40))
			var t = yOffset > 0 ? "+="+(yOffset*40) : "-=" + Math.abs((yOffset*40))

			console.log("l : " + l);
			console.log("t : " + t)
			$(this.img).animate({
				left : l,
				top : t
			}, 500, function() {

			})

		}
	}

	display() {
		var img = $("<img></img>")
		$(img).attr('src',this.imagePath);
		$(img).css('position','absolute');
		$(img).css('left', this.x * 40 + 4)
		$(img).css('top', this.y * 40 + 4);
		$('#island').append($(img))
		this.img = $(img);
	}
}

class Rabbit extends Animal {
	constructor(x,y, world) {
		super(x,y,world)
		super.imagePath = "resources/rabbit.png"
		super.chance = Number.parseFloat($('#inputRabbitChance').val())
	}

	needMove() {
		return Math.random() < this.chance;
	}
}

class Wolf extends Animal {
	constructor(x,y,world) {
		super(x,y,world)
		super.imagePath = "resources/wolf.png"
		super.chance = 1;
	}

	needMove() {
		return true;
	}
}