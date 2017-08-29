'use strict'

/*
	0 1 2
	3   4
	5 6 7
*/
var DIRECTION = {
	 0 : {x : -1, y : -1}
	,1 : {x :  0, y : -1}
	,2 : {x : +1, y : -1}
	,3 : {x : -1, y :  0}
	,4 : {x : +1, y :  0}
	,5 : {x : -1, y : +1}
	,6 : {x :  0, y : +1}
	,7 : {x : +1, y : +1}
}

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

	$('#stop').click(function(event) {
		world.stop();

	})

	$('button.settings').click(function(event) {
		$('#expandedSettings').toggle(1);

	})

	//private functions
	function _clear() {
		$("#island > img").remove()
	}
})
