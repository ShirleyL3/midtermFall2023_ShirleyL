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
let strawberrys = [];
let cheeses = [];
let scene = 1;
let berry;


function setup() {
  createCanvas(800,800);
  berry = new Strawberry(30,40);

  for (let i =0; i<10; i++){ // adds new objects to strawberrys array at different positions
    x = random(width);
    y = random(height);
    strawberrys[i] = new Strawberry(x,y);
  }

  for (let i = 0; i<10; i++){// adds new objects to cheeses array at different positions
    x = random(width);
    y = random(height);
    cheeses[i] = new Cheese(x,y);
  } 
}

function draw() {
  if (scene == 1 ){
    background(0);
    for (let i = 0; i < strawberrys.length; i++){ //iterates through Array and displays and moves objects
    // could be " strawberrys.length" or "cheeses.length" bc they are the same length
      cheeses[i].move();
      cheeses[i].display();
      strawberrys[i].move();
      strawberrys[i].display();
    
 
    var d = dist(cheeses[i].x, cheeses[i].y, strawberrys[i].x, strawberrys[i].y);//calculates distance
      
    if ( d < cheeses[i].r + strawberrys[i].r){ // if a cheese and strawberry are touching then change coloruses radius distance to check
        cheeses[i].changecol();
        strawberrys[i].changecol();
    }
    }
  }

  if (scene == 2){// calls flavor_dots function with chef_ratatouille
    flavor_dots();
    chef_ratatouille();
  }

  if (scene == 3){ //Huge strawberry getting bit
    background(0);
    berry.huge();
    mousePressed();
   }
}

function mousePressed(){
  if (scene ==3){
    eat();
  }
}

function eat(){ // variety of bite marks based on position
  push();
  
  translate(mouseX, mouseY);
  if ((mouseX< 400) && (mouseY<=400)){ //Top Left
    scale(2);
    bite(0,0);
  } 
  if ((mouseX > 400 )&& (mouseY<=400)){ //Top Right
    scale(0.5);
    bite(0,0);
  } 
  if ((mouseX< 400) && (mouseY>=400)){ //Bottom Left
    scale(3);
    bite(0,0);
  }
  if((mouseX> 400) && (mouseY>=400)){ //Bottom Right
    bite(0,0);
  }
  
pop();
}

function flavor_dots(){ // Make a red/yellow toned Dotted background
  frameRate(6);
  x = random(width);
  y = random(height);
  r = random(20,60);
  col.r = random(100,255);
  col.g = random(100);
  col.b = 0;
  fill(col.r, col.g, col.b, 140);
  noStroke();
  ellipse(x, y, r);
}

function bite(x,y){ // Bite Mark 
  noStroke();
  fill(255);
  circle(x,y, 50);
  circle(x-30, y +20, 50);
  circle(x+30, y +15, 50);
  circle(x-30, y+50, 50);
  circle(x, y+70, 50);
  circle(x+30, y +50, 50);
  circle(x,y +30,50);
}

function ratatouille(x, y){ // Ratatouille Mouse Shape
  fill("#A8A8A8"); //Grey
  ellipse(x, y, 50, 70);
  fill("#EEA8A8") //pink
  circle(x, y-40, 15);
  stroke("#EEA8A8"); //pink
  bezier(x, y+34, x, y+80, x-10, y+82, x-12, y+85);
}

function chef_ratatouille(){
  fill("#EEA8A8"); //pink ears
  circle(520,600, 100);
  circle(360, 600, 100);
  fill(255); // white
  rect(400, 500, 80, 120);
  circle(400, 500, 60);
  circle(440, 480, 60);
  circle(480, 500, 60);
  fill("#A8A8A8"); // gray
  ellipse(440,740,200,300);
  fill("#EEA8A8"); //pink nose
  circle(440,680,40);
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
    noStroke();
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
    var d = dist(this.x, this.y, food.x, food.y);
    if ( d < this.r + food.r){
      return true;
    }else{
      return false;
    }
  }
}

class Strawberry{ // Strawberry Class
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 55;
    this.col = color(149,0,0);//Red
    this.col2 = color(41,183, 84); // Green
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
  huge(){// makes strawberry bigger calling the display method
    scale(5.0);
    this.display();
  }
}

function keyPressed(){ //Changes Scene
  scene ++;
  if (scene ==1){
    background(0);
  }
  if (scene ==2){
    background(0);
  }
  // background(0);// resets background before eavery scene
  if (scene > 4){
    scene = 1;// resets to first scene
  }
}
//  rotate(random(6.28));