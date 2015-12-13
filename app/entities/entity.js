define([], function() {

	this.create = function(x, y, width, height) {

		var that = {};

		var speedX = Math.random() * 10 + 1;
		var speedY = Math.random() * 10 + 1;

		var x = x;
		var y = y;

		that.width = width;
		that.height = height;

		that.render = function (context) {
			context.fillStyle = "#FFFFFF";
			context.fillRect(x , y, that.width, that.height);
		};

		that.update = function(width, height) {

			x += speedX;
			y += speedY;

			if((x + that.width) > width || x < 0) {
				speedX *= -1;
			}

			if(y + that.height > height || y < 0) {
				speedY *= -1;
			}
		};

		return that;
	};

	return this;
});
