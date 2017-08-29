'use strict'

class World {
	constructor(size) {
		this.array = new Array(size);
		for(var i = 0; i < this.array.length; i++) {
			this.array[i] = new Array(size);
		}
		this.isGenerated = false;
	}

	generateWorld(rabbitSize, wolfSize) {
		var me = this;
		this._clear()
		for(var i = 0; i < rabbitSize; i++) {
			this._create(function(x,y) {
				return new Rabbit(x,y,me);
			})
		}
		for(var i = 0; i < wolfSize; i++) {
			this._create(function(x,y) {
				return new Wolf(x,y,me)
			})
		}

		this.isGenerated = true;
	}

	start() {
		var me = this
		this.intervalId = setInterval(function() {
			me._move();
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
	}

	isGenerate() {
		return this.isGenerated;
	}

	moveAnimal(animal) {
		var x = animal.x;
		var y = animal.y;

		var direct = null;
		do {
			direct = DIRECTION[Math.floor(Math.random() * 7)]
		} while(!this._isValidDirect(x,y, direct))

		var a = this.array[x][y];
		this.array[x][y] = undefined;
		this.array[x + direct.x][y+direct.y] = a;
		return direct;

	}

	display() {
		var me = this;
		this._forEach(function(i,j) {
			if (me.array[i][j] != undefined) {
				me.array[i][j].display();
			}
		})
	}

	//private methods
	_isValidDirect(x,y, direct) {
		var x1 = x + direct.x;
		var y1 = y + direct.y;

		return x1 >= 0 && x1 < 20 && y1 >=0 && y1 < 20
	}
	_move() {
		var me = this;
		this._forEach(function(i,j) {
			if (me.array[i][j] != undefined) {
				me.array[i][j].move()
			}
		})
	}

	_create(f) {
    		var x = 0;
    		var y = 0;
    		do
    		{
    			x = Math.floor(Math.random() * 20);
    			y = Math.floor(Math.random() * 20);
    		} while(this.array[y][x] != undefined)

    		this.array[y][x] = f(x,y);
    	}

	_clear() {
		var me = this;
		this._forEach(function(i,j) {
			me.array[i][j] = undefined;
		})
	}

	_forEach(f) {
		for(var i = 0; i < this.array.length; i++) {
			for(var j = 0; j < this.array[i].length; j++) {
				f(i,j);
			}
		}
	}
}