let rez = 20;
let xdir = 1;
let ydir = 0;
let snake= [];
let head;
let food;

function setup() {
  createCanvas(400, 400);
  snake[0] = createVector(0,0);
  food = createVector(20, 40);
}

function draw() {
  frameRate(5);
  background(220);
  rect(snake[snake.length-1].x, snake[snake.length-1].y, rez, rez);
  rect(food.x, food.y, rez,rez);
  moveSnake();

}

function moveSnake(){
  // snake.x += rez*xdir;
  // snake.y += rez*ydir;
  
head = snake[snake.length-1].copy();
  head.x += rez*xdir;
  head.y += rez*ydir;
  
  snake.push(head);
  snake.shift();
}

function turn(x,y){
  xdir = x;
  ydir = y;
}

function moveFood(){
  food.x = random(floor(width/rez))*rez;
  food.y = random(floor(height/rez))*rez;
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    turn(-1,0);
  }else if(keyCode === RIGHT_ARROW){
    turn(1,0);
  }else if(keyCode === DOWN_ARROW){
    turn(0,1);
  }else if(keyCode === UP_ARROW){
    turn(0,-1);
  }else if(keyCode === SHIFT){
    moveFood();
  }
}
