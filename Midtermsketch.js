// chaning gradient in the back 
// food shapes: strawberry, grapes, cheese 
//bite effect on fruit 
// yummy face? smiley with tounge?


let dim;

function setup() {
  createCanvas(800,800);
  background(255);
  colorMode(HSB, 360, 100, 100);
  dim = width /2
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
  background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

function strawberry(){
  fill()

}