var requestAnimFrame = (function(){
  return window.requestAnimationFrame       ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         window.oRequestAnimationFrame      ||
         window.msRequestAnimationFrame     ||
         function(callback, element){
           window.setTimeout(callback, 1000 / 60);
         };
})();


window.onload = function() {
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");

	var width = canvas.width = 500;
	var height = canvas.height = 500;

	var x = 50;
	var y = 50;

	var h = 25;
	var w = 25;

	var speedX = 5;
	var speedY = 10;

	function gameLoop() {
		requestAnimationFrame(gameLoop);	
		render();
		update();
	}

	function render() {
		context.fillStyle = "#000000";
		context.fillRect(0, 0, width, height);
		context.fillStyle = "#FFFFFF";
		context.fillRect(x, y, h, w);
	}

	function update() {

		x += speedX;
		y += speedY;

		if((x + w) > width || x < 0) {
			speedX *= -1;
		}

		if(y + h > height || y < 0) {
			speedY *= -1;
		}
	}

	//Start game
	gameLoop();
};


