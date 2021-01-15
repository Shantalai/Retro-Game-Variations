// Functional version 
let ship;
let fire = [];
let fireNum = 0;
let enemy = [];
enemy.length = 10;
let score; 

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  ship = createVector(185,370);
  
  for(let i=0; i<enemy.length; i++){
    enemy[i] = createVector(floor(random(width)),floor(random(height-100)));
    
  }
}

function draw() {
  background(100);
  rect(ship.x, ship.y, 30,30);
  for(let i =0; i<enemy.length; i++){
    rect(enemy[i].x, enemy[i].y, 15,15);
  }
  
  if(keyIsDown(LEFT_ARROW)){  
    ship.x -= 10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ship.x +=10;
  }

}

function keyPressed(){
  if(keyCode == UP_ARROW){
    shoot();
  }
}

function moveEnemy(){
  for(let i = 0; i<enemy.length; i+3){
    enemy[i] = createVector(floor(random(width)), floor(random(height-100)));
    rect(enemy[i].x, enemy[i].y, 15, 15);
  }
}


function shoot(){
  fire[fireNum] = createVector(ship.x+10, ship.y+10);
  
  for(let i = 0; i<400; i++){
    fire[fireNum].y -= 1;
    stroke(255, 204, 0);
    rect(fire[fireNum].x, fire[fireNum].y, 5,5);
    for(let  i = 0; i<enemy.length; i++){
      
    if((fire[fireNum].x<=enemy[i].x+15 && fire[fireNum].x>=enemy[i].x) && (fire[fireNum].y<=enemy[i].y+15 && fire[fireNum].y>=enemy[i].y) ){
       console.log(i);
      enemyKill(i);
       }
    }
  }
  fireNum += 1;
}

function enemyKill(eindex){
  circle(enemy[eindex].x+7.5, enemy[eindex].y+7.5, 30);
  enemy.splice(eindex, 1);
  
}
 
