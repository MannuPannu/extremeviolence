define(function(require) {

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

    var $ = require('jquery');

    var Entity = require('./entities/entity');

    var canvas = $("#canvas")[0];

    var context = canvas.getContext("2d");

    var width = canvas.width = 500;
    var height = canvas.height = 500;

    var speedX = 5;
    var speedY = 10;

    var entities = [];

    //Todo: Add underscore.js :O
    for(var i = 0; i < 10; i++) {
      entities.push(Entity.create(Math.random() * width, Math.random() * height, 25, 25));
    }

    function render() {
      context.fillStyle = "#000000";

			context.fillRect(0, 0, width, height);

      for(var i = 0; i < entities.length; i++){
        var player = entities[i];
        player.render(context);
      }
    }

    function update() {
      for(var i = 0; i < entities.length; i++){
        var entity = entities[i];
        entity.update(width, height);
      }
    }

    function gameLoop() {
      requestAnimationFrame(gameLoop);
      render();
      update();
    }

    gameLoop();
});
