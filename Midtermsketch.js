// changing gradient in the back 
// food shapes: strawberry, grapes, cheese 
// bite effect on fruit 
// yummy face? smiley with tounge?


// let dim;

// function setup() {
//   createCanvas(800,800);
//   background(255);
//   colorMode(HSB, 360, 100, 100);
//   dim = width /2
//   noStroke();
//   ellipseMode(RADIUS);
//   frameRate(1);
// }

// function draw() {
//   background(0);
//   for (let x = 0; x <= width; x += dim) {
//     drawGradient(x, height / 2);
//   }
// }

// function drawGradient(x, y) {
//   let radius = dim / 2;
//   let h = random(0, 360);
//   for (let r = radius; r > 0; --r) {
//     fill(h, 90, 90);
//     ellipse(x, y, r, r);
//     h = (h + 1) % 360;
//   }
// }\

let x;
let y;


function strawberry(x, y){ // Strawberry shape
noStroke();
fill("#E81062");
triangle(x, y, x +50, y +100, x +100, y);
fill("#2AEA7D");
triangle(x +30, y, x+28, y-25, x+50, y);
triangle(x +40, y, x+50, y-30, x+60, y);
triangle(x+50, y, x+70, y-25, x+70, y);
}

function cheese(x, y){ //Cheese Shape
  fill("#EAE123");
  triangle(x, y, x +130, y+30, x+ 130, y- 20);
  fill("#EBBE1A");
  quad(x, y, x+130, y+30, x+130, y+70, x, y + 40);
}

function donut(x,y){ // Donut Shape
}

function bite(x,y){ // Bite Mark 
  fill("#222222");
  circle(x,y, 50);
  circle(x-10, y +30, 50);
  circle(x+5, y +60, 50);
}

function ratatouille(){ // Ratatouille Shape

}



let startColor = 255;
let speedAnimate = 1.5;
function setup() {
  noStroke();
  createCanvas(800,800);
}

function draw() {
  background(255);
  strawberry(100,100);
  cheese(200,200);
  bite(400,400);
}

  // if(startColor > width + 255 || startColor < 255) {
  //   speedAnimate *= -1;
  // }
  // startColor += speedAnimate;
  
  // let gap = -12;
  // let numRectangles = 30;
  // let rectWidth = width / numRectangles;
  // for (let x = 0; x < width; x += gap + rectWidth) {
  //   let green = startColor - x;
  //   let red = 255;
  //   fill(red, green, 0);
  //   rect(x, 0, rectWidth, height)
  // }
