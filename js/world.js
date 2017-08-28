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
		this._clear()
		for(var i = 0; i < rabbitSize; i++) {
			this._create(function(x,y) {
				return new Rabbit(x,y);
			})
		}
		for(var i = 0; i < wolfSize; i++) {
			this._create(function(x,y) {
				return new Wolf(x,y)
			})
		}

		this.isGenerated = true;
	}

	start() {

	}

	isGenerate() {
		return this.isGenerated;
	}

	display() {
		for(var i =0; i < this.array.length; i++) {
			for(var j = 0; j < this.array[i].length; j++) {
				if (this.array[i][j] != undefined) {
					this.array[i][j].display();
				}
			}
		}
	}

	//private methods
	_create(f) {
    		var x = 0;
    		var y = 0;
    		do
    		{
    			x = Math.round(Math.random() * 19);
    			y = Math.round(Math.random() * 19);
    		} while(this.array[y][x] != undefined)

    		this.array[y][x] = f(x,y);
    	}

	_clear() {
    		for(var i = 0; i < this.array.length; i++) {
    			for(var j = 0; j < this.array[i].length; j++) {
    				this.array[i][j] = undefined;
    			}
    		}
    	}
}