let s;
let f;
let rez = 20; 
function setup() {
  frameRate(5);
  createCanvas(400, 400);
  s = new Snake();
  f = new Food();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    s.setDir(-1,0);
  }else if(keyCode === RIGHT_ARROW){
    s.setDir(1,0);
  }else if(keyCode === UP_ARROW){
    s.setDir(0,-1);
  }else if(keyCode === DOWN_ARROW){
    s.setDir(0,1);
  }
  
}

function draw() {
  background(220);
  
  f.give()
  s.show();
  s.move();
   
}

class Snake{
  
  constructor(){
  
  this.x = 0;
  this.y = 0;
  this.xto = 0;
  this.yto = 0;
  
  }
  
  move(){
    this.x = this.x+this.xto*rez;
    this.y = this.y+this.yto*rez;
    
    this.x = constrain(this.x, 0, width-rez);
    this.y = constrain(this.y, 0, height-rez);
    
  }
  
  setDir(x,y){
    this.xto = x;
    this.yto = y;
  }
  
  show(){
    rect(this.x, this.y, 20,20);
  }
  
}

class Food{
  
  constructor(){
    let col = floor(width/rez);
    let row = floor(height/rez);
    
    this.x = floor(random(col))*rez;
    this.y = floor(random(row))*rez;
    
  }
  
  give(){
    
    rect(this.x,this.y, rez, rez);
    
  }
}

