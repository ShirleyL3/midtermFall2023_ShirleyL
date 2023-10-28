// Shirley Landeros Creative Coding Midterm
// For this project my adjective is flavorfull, I got my inspiration from the Ratatoulle scene 
/// where he eats strawberry and cheese and they visually animated the flavors

var col = {
  r :255,
  g :0,
  b :0,
}
let x;
let y;
let strawberrys =[];
let cheeses = []
let cheese1;
let scene = 1;
let strawberry1;

function setup() {
  createCanvas(800,800);
  // cheese1 = new Cheese(0,350);
  // strawberry1 = new Strawberry(800,350);

  for (let i=0; i<10; i++){
    x = random(width);
    y = random(height);
    strawberrys[i] = new Strawberry(x,y);
    cheeses[i] = new Cheese(x,y);
  }
  
}

function draw() {
  background(0);

  for (let i = 0; i < strawberrys.length; i++){
    strawberrys[i].move();
    strawberrys[i].display()
    cheeses[i].move();
    cheeses[i].display()
  }

  // strawberry1.display();
  //   cheese1.display();
  //   for (x = 0; x< 400; x ++){
  //     frameRate(7);
  //     strawberry1.move();
  //   }
  //   for (x = width; x> 400; x--){
  //     cheese1.move();
  //   }
  //   if (cheese1.touches(strawberry1)){
  //     cheese1.changecol();
  //     strawberry1.changecol();
  //   }else{
      
  //   }

  
  // if (scene == 1){// calls flavor_dots function
  //   flavor_dots();
    
  // }
  //   push();
  //     translate(mouseX, mouseY);

  //     if (scene == 2){
  //       r = map(mouseX, 0, width, 0, 255);
  //       g = map(mouseX, 0, width, 255, 50);
  //       b = map(mouseY, 0, width, 255, 50);

  //       background(r, g, b);
  //       ratatouille(0, 0);
  //     }
  //   pop();
}


function flavor_dots(){ // Make a red/yellow toned Dotted background
  frameRate(6);
  x = random(width);
  y = random(height);
  r = random(15,50);
  col.r = random(100,255);
  col.g = random(100);
  col.b = 0;
  fill(col.r, col.g, col.b, 130);
  noStroke();
  ellipse(x, y, r);
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

class Cheese{ // Cheese Class
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 55;
    this.col= color(234, 255, 35);//Brighter Yellow
    this.col2 = color(235,190,26);// Darker Yellow
  }
  display(){ //Displays Cheese Shape
    fill(this.col);
    triangle(this.x, this.y, this.x +130, this.y+30, this.x+ 130, this.y- 20);
    fill(this.col2);
    quad(this.x, this.y, this.x+130, this.y+30, this.x+130, this.y+70, this.x, this.y + 40);
    fill(0,0,0,0);// Transparent circle mianly using it to calculate the distance with this.r 
    ellipse(this.x+70, this.y +22, this.r*2);
  }
  move(){ // moves along the x-axis
    this.x = this.x + random(-5,5);
    this.y = this.y;
  }
  changecol() { //random color
    this.col = color(random(255), random(255), random(255),120);
    this.col2 = color(random(255), random(255), random(255),120);
  }
  touches(food){// checks if cheese is intersting with any other food
    var d = dist(cheese1.x, cheese1.y, food.x, food.y);
    if ( d < this.r + food.r){
      return true;
    }else{
      return false;
    }
  }
}

class Strawberry  { // Strawberry Class
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 55;
    this.col = color(149,0,0,120);//Red
    this.col2 = color(41,183, 84, 160); // Green
  }
  display(){ //Displays strawberry Shape
    noStroke();
    fill(this.col);
    triangle(this.x, this.y, this.x +50, this.y +100, this.x +100, this.y);
    fill(this.col2);
    triangle(this.x +30, this.y, this.x +28, this.y -25, this.x +50, this.y);
    triangle(this.x +40, this.y, this.x +50, this.y -30, this.x +60, this.y);
    triangle(this.x +50, this.y, this.x +70, this.y -25, this.x +70, this.y);
    fill(0,0,0,0);// Transparent circle mianly using it to calculate the distance with this.r 
    ellipse(this.x +50, this.y +35, this.r*2);
  }
  move(){ // moves along the x-axis
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  changecol() { //random color
    this.col = color(random(255), random(255), random(255));
    this.col2 = color(random(255), random(255), random(255));
  }
}

function keyPressed(){ //Changes Scene
  scene ++;
  if (scene > 3){
    background(0);
    scene = 1;
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