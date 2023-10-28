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
let strawberry1;

function setup() {
  createCanvas(800,800);
  background(0);
  strawberry1 = new Strawberry(200,200);
}

function draw() {
  // r = map(mouseX, 0, width, 0, 255);
  // g = map(mouseX, 0, width, 255, 50);
  // b = map(mouseY, 0, width, 255, 50);

  // background(r, g, b);
  // ratatouille(mouseX, mouseY);

  // flavor_dots();
  strawberry1.display();
  

}

function flavor_dots(){ // Make a red/yellow toned Dotted background
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

// 

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

class Strawberry { // Strawberry Class
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  display(){
    noStroke();
    fill("#E81062");
    triangle(this.x, this.y, this.x +50, this.y +100, this.x +100, this.y);
    fill("#2AEA7D");
    triangle(this.x +30, this.y, this.x+28, this.y-25, this.x+50, this.y);
    triangle(this.x +40, this.y, this.x+50, this.y-30, this.x+60, this.y);
    triangle(this.x+50, this.y, this.x+70, this.y-25, this.x+70, this.y);
  }
  


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