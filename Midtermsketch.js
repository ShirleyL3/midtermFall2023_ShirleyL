// changing gradient in the back 
// food shapes: strawberry, cheese 
// bite effect on fruit 
// yummy face? smiley with tounge?

var col = {
  r :255,
  g :0,
  b :0,
}
let x;
let y;

function setup() {
  createCanvas(800,800);
  background(0);
}

function draw() {
  // r = map(mouseX, 0, width, 0, 255);
  // g = map(mouseX, 0, width, 255, 50);
  // b = map(mouseY, 0, width, 255, 50);

  // background(r, g, b);
  // ratatouille(mouseX, mouseY);

  flavor_dots();

}

function flavor_dots(){
  frameRate(6);
  x = random(width);
  y = random(height);
  r = random(10,40);
  col.r = random(100,255);
  col.g = random(100);
  col.b = 0;
  fill(col.r, col.g, col.b, 130);
  noStroke();
  ellipse(x, y, r);
}

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

function ratatouille(x, y){ // Ratatouille Mouse Shape
  fill("#A8A8A8");
  ellipse(x, y, 50, 70);
  fill("#EEA8A8")
  circle(x, y-40, 15);
  stroke("#EEA8A8");
  bezier(x, y+34, x, y+80, x-10, y+82, x-12, y+85);
}

//void case5() { //places various of the shape in different areas and sizes
//  float r=random(255);
//  float g=random(255);
//  float b=random(255);
//  fill(r, g, b);
//  float s=random(3);
//  scale(s);
//  float m=mouseX-85+random(-10,10);
//  float n=mouseY-65+random(-10,10);
//  //println(mouseX/800, mouseY);
//  rotate(random(6.28));
//  if (mousePressed) {
  
//    myCluster(m,n);
//    println(m,n);
//  }
//}