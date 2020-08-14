let rez = 20;
let xdir = 1;
let ydir = 0;
let snake= [];
let head;
let newHead;
let food;
let score = 0; 
function setup() {
  createCanvas(400, 400);
  textSize(32);
  snake[0] = createVector(0,0);
  food = createVector(200, 200);
}

function draw() {
  frameRate(5);
  background(220);
  for(var i = 0; i<snake.length; i++){
    rect(snake[i].x, snake[i].y, rez, rez);
  }
  rect(food.x, food.y, rez,rez);
  moveSnake();
  //console.log(snake[snake.length-1].x+","+snake[snake.length-1].y);
  
  for(let i=0; i<snake.length-1; i++){
    if(snake[snake.length-1].x == snake[i].x && snake[snake.length-1].y == snake[i].y){
      snakeDie();
    }
  }
  
  if(snake[snake.length-1].x == food.x && snake[snake.length-1].y == food.y ){
    console.log("helo");
    console.log(snake.length);
    growSnake();
  }
  
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

function growSnake(){
  newHead = food.copy();
  snake.push(newHead);
  moveFood();
  score +=1;
}

function turn(x,y){
  xdir = x;
  ydir = y;
}

function moveFood(){
  food.x = floor(random(floor(width/rez)))*rez;
  food.y = floor(random(floor(height/rez)))*rez;
}

function snakeDie(){
  background(600,500,100);
  text("End! You scored "+score,10, 200);
  noLoop();
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
