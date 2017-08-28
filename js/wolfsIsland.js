'use strict'

var DIRECTION = [0,1,2,3,4,5,6,7]

$(document).ready(function() {

	var world = new World(20);

	$('#generate').click(function(event) {
		_clear();
		var rabbitSize = Number.parseInt($('#rabbitStart').val())
		var wolfSize = Number.parseInt($('#wolfStart').val())
		world.generateWorld(rabbitSize,wolfSize);
		world.display();
	})

	$('#start').click(function(event) {
		if (!world.isGenerate()) {
			console.log('cant start not initializing world')
			return;
		}

		world.start();
	})

	$('button.settings').click(function(event) {
		$('#expandedSettings').toggle(1);

	})




	function _clear() {
		$("#island > img").remove()
	}
})
