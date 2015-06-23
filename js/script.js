/*Code for my javascript game*/
"use strict";


/*Declare my variables in a composite variable*/
var Game = {
    canvas : undefined,
    canvasContext : undefined,
    backgroundSprite : undefined,
};


/*function that starts the game*/
Game.start = function () {
    Game.canvas = document.getElementById("gameWorld");
    Game.canvasContext = Game.canvas.getContext('2d');
    // document.onmousemove = handleMouseMove;
    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "assets/background.jpg";
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);


/*This function helps to clear my canvas*/
Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

/**/
Game.drawImage = function (sprite, position) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0, 0, sprite.width, sprite.height);
    Game.canvasContext.restore();
};


/*this function is responsible for my game loop */
Game.mainLoop = function() {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

/*This is responsible for all update on the game*/
Game.update = function () {
};

/*This function draws my sprite*/
Game.draw = function () {
    Game.drawImage(Game.backgroundSprite, { x : 0, y : 0 });
    // Game.drawImage(Game.balloonSprite, Game.balloonPosition);
};


