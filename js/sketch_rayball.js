
let balls = [];
let boundaries = [];
let raysources = [];
let colors_balls = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  randomBoundaries(3);
  setupWalls();
  setupColor();
  standardBalls(200);
} 

function standardBalls(amount){
  while(amount>0){
    let b = new Ball(2,random(1,2),color(40,40,40),.75,10);
    amount--;
    b.setPos(random(0,width),random(0,height));
    b.setVelocity(createVector(random(-2,2),random(-2,2)));
    balls.push(b);
  }
}

function setupWalls(){
  boundaries.push(new Boundary(0,0,0,height));
  boundaries.push(new Boundary(0,0,width,0));
  boundaries.push(new Boundary(width,0,width,height));
  boundaries.push(new Boundary(0,height,width,height));
}

function setupColor(){
  colors_balls.push(color(136,136,136));
  colors_balls.push(color(255,232,223));
}

function randomBoundaries(amount){
  for(let i = 0; i < amount; i++){
    boundaries.push(new Boundary(random(width),random(height),random(width),random(height)));
  }
}

function draw(){
  background(240);
  //for(let boundary of boundaries){
  //  boundary.show();
  //}
  //raysources[0].followObj(balls[0].p.x,balls[0].p.y);
  //raysources[0].look(boundaries);

  for(let ball of balls){
    if(mouseIsPressed)
      ball.followMouse();

    
    ball.update();
    ball.checkForWall();
    ball.show();
  }
}

