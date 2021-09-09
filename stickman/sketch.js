var stickmanX =300
var stickmanY =100
var movement =5
var left = false
var right =false
var down =false
var up =false









function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  push()
  strokeWeight(0)
  fill(50, 50, 50)
  circle(stickmanX, stickmanY, 50)
  pop()
  
  push()
  strokeWeight(3)
  //body
  line(stickmanX, stickmanY+100, stickmanX, stickmanY+25)
  //leftarm
  line(stickmanX-20, stickmanY+70, stickmanX, stickmanY+40)
  //rightarm
  line(stickmanX+20, stickmanY+70, stickmanX, stickmanY+40)
  //leftleg
  line(stickmanX, stickmanY+100, stickmanX-20, stickmanY+130)
  //rightleg
  line(stickmanX, stickmanY+100, stickmanX+20, stickmanY+130)
  pop()
  
  if (left == true) {
    stickmanX = stickmanX - movement;
  }
  if (right == true) {
    stickmanX = stickmanX + movement;
  }
  if (up == true) {
    stickmanY = stickmanY - movement;
  }
  if (down == true) {
    stickmanY = stickmanY + movement;
  }
}
function keyPressed(){
  if (keyCode === LEFT_ARROW) {     
  left = true;
  }
  if (keyCode === RIGHT_ARROW) {     
  right = true;   
  }
  if (keyCode === UP_ARROW) {     
  up = true;   
  }
  if (keyCode === DOWN_ARROW) {     
  down = true;  
  }
  return false;
}

function keyReleased() { // start of keyReleased
  if (keyCode === LEFT_ARROW) {
    left = false;
  }
  if (keyCode === RIGHT_ARROW) {
    right = false;
  }
  if (keyCode === UP_ARROW) {
    up = false;
  }
  if (keyCode === DOWN_ARROW) {
    down = false;
  }
} // slutningen af keyReleased