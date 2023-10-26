// changing gradient in the back 
// food shapes: strawberry, cheese 
// bite effect on fruit 
// yummy face? smiley with tounge?

var color = {
  r :255,
  g :0,
  b :0,
}
let x;
let y;

function setup() {
  createCanvas(800,800);
}

function draw() {
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseX, 0, width, 255, 50);
  b = map(mouseY, 0, width, 255, 50);

  background(r, g, b);
  ratatouille(mouseX, mouseY);
  

}

function color_dots(){
  for (var i = 0; i<50; i++){
    var posx = random(width);
    var posy = random(height);
    var r = random(10,30);
    color.r = random(100,255);
    color.g = random(255);
    color.b = 0;
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(posx, posy, r);
  }

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