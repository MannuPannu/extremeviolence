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
	console.log("Game start");
};
