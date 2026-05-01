let height = 75;
let width  = 50;

function setup() {
 
 createCanvas(windowWidth,windowHeight);
 background('#A9FFA3');
}

function draw() {
  // put drawing code here
  stroke('#E69749');
  strokeWeight(5);
 
   if (mouseIsPressed === true) {
       fill('#E6406C')
      } else {
        fill ('#4971E6');
      }
       ellipse(mouseX, mouseY, height, width);
  
  fill('#E63220');
  ellipse (200, 200, height, width)
}
 
