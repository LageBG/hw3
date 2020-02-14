var ballx = 0;
var ballSpeed = 10;

var ballx2 = 0;
var ballSpeed2 = 5;

var ballx3 = 0;
var ballSpeed3 = 15;

function setup() {
  createCanvas(800, 400);
  frameRate(24)
}

function draw() {
  background(220);

  ellipse(ballx, 100, 50);
  ellipse(ballx2, 200, 50);
  ellipse(ballx3, 300, 50);

  ballx = ballx + ballSpeed;
  ballx2 = ballx2 + ballSpeed2;
  ballx3 = ballx3 + ballSpeed3;

  
  
  //bounce first ball
  if (ballx > width) {
    ballSpeed = -ballSpeed;
  }

  if (ballx == 0) {
    ballSpeed = -ballSpeed;
  }
   
  
  //bounce second ball 
  if (ballx2 > width) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballx2 == 0) {
    ballSpeed2 = -ballSpeed2;
  }
 
  
  
  //bounce third ball 
  if (ballx3 > width) {
    ballSpeed3 = -ballSpeed3;
  }
  
  if (ballx3 == 0) {
    ballSpeed3 = -ballSpeed3;
  }
  
}
