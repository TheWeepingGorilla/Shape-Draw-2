'use strict';

var tileCountX = 1;
var tileCountY = 1;
var count = 0;

function setup(){
  createCanvas(windowWidth, windowHeight * .8);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  stroke(0);

  count = mouseX / 10 + 10;
  var para = mouseY / height;

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {
      var posX = tileWidth * gridX + tileWidth / 2;
      var posY = tileHeight * gridY + tileHeight / 2;

      push();
      translate(posX,posY);

      // switch between modules

      noStroke();
      for (var i = 0; i < count; i++) {
        var gradient = lerpColor(color(0,130,164),color(255),i / count);
        fill(gradient,170);

        push();
        translate(4 * i,0);
        ellipse(0,0,tileWidth / 4, tileHeight / 4);
        pop();

        push();
        translate(-4 * i,0);
        ellipse(0,0,tileWidth / 4, tileHeight / 4);
        pop();

        scale(1 - 1.5 / count);
        rotate(para * 1.5);
      }
      pop();

    }
  }
}

function keyReleased(){
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode === DOWN_ARROW) tileCountY = max(tileCountY - 1,1);
  if (keyCode === UP_ARROW) tileCountY += 1;
  if (keyCode === LEFT_ARROW) tileCountX = max(tileCountX - 1,1);
  if (keyCode === RIGHT_ARROW) tileCountX += 1;
}