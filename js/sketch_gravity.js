console.log("sketch_gravity.js loaded");

let b;
let env;

function setup(){
  createCanvas(windowWidth,windowHeight);
  b = new Ball(10,1,color(40),100,30);
}

function draw(){
  background(240);
  if(mouseIsPressed)
    b.applyForce(createVector(5, -100));
  
  b.applyForce(createVector(0, .1));
  b.update();
  b.checkForWall();
  b.show();
}