console.log("sketch loaded");
let boundaries = [];
let s;
let s1;
var x, y, w, h;
var offsetX, offsetY;

function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i = 0; i < 5; i++){
    boundaries.push(new Boundary(random(width),random(height),random(width),random(height)));
  }
  boundaries.push(new Boundary(0,0,0,height));
  boundaries.push(new Boundary(0,0,width,0));
  boundaries.push(new Boundary(width,0,width,height));
  boundaries.push(new Boundary(0,height,width,height));
  s = new raySource(512,color(255-92,255-137,255,64));
  s1 = new raySource(512,color(0,142,152,128));
}

function draw(){
  background(40,40,40);
  for(let boundary of boundaries){
    boundary.show();
  }
  s.followMouse();

  s1.look(boundaries);
  s.look(boundaries);

  //s1.show();
  //s.show();
  // let sourceLeft = s.pos.x - 16;
  // let sourceRight = s.pos.x + 16;
  // let sourceTop = s.pos.y - 16;
  // let sourceBot = s.pos.y + 16;

  // if(mouseX < sourceRight && mouseX > sourceLeft && mouseY > sourceTop && mouseY < sourceBot){

}
