class Ball{
    constructor(radius,mass,color,aLimit,vLimit){
      this.r = radius;
      this.p = createVector(width/2,height/2);
      this.v = createVector(0, 0);
      this.a = createVector(0, 0);
      this.m = mass;
      this.c = color;
      this.vL = vLimit;
      this.aL = aLimit;
    }

    applyForce(force){
      this.a.add(force.div(this.m));
      this.a.setMag(this.aL);
    }

    followMouse(){
      this.setAcceleration(createVector(mouseX - this.p.x,mouseY - this.p.y));
    }

    setPos(x,y){
      this.p.x = x;
      this.p.y = y;
    }

    setAcceleration(acceleration){
      this.a = acceleration;
      this.a.setMag(this.aL);
    }

    setVelocity(velocity){
      this.v = velocity; 
    }

    update(){
      this.v.add(this.a);
      this.v.limit(this.vL); 
      this.p.add(this.v);
      this.a = createVector(0,0);
     // this.trail();
    }

    trail(){
      push();
      stroke(40);
      strokeWeight(this.r);
      line((this.p.x),(this.p.y),(this.p.x-1.5*this.v.x),(this.p.y-1.5*this.v.y));
      pop();
    }

    checkForWall(){
      let speedModifier = 1;
      let xModifier = 1;
      if(this.p.x + this.r > width){
        xModifier = -speedModifier;
        this.p.x = width-this.r;
      }
      if(this.p.x - this.r < 0){
        xModifier = -speedModifier;
        this.p.x = 0 + this.r;
      }

      this.v.x *= xModifier;
      //this.a.x *= xModifier;

      let yModifier = 1;

      if(this.p.y + this.r > height){
        yModifier = -speedModifier;
        this.p.y = height - this.r;
      }

      if(this.p.y - this.r < 0){
        yModifier = -speedModifier;
        this.p.y = 0 + this.r;
      }

      this.v.y *= yModifier;
      //this.a.y *= yModifier;

    }
    
    show(){
      push();
      noStroke();
      fill(this.c);
      circle(this.p.x, this.p.y, this.r*2);
      pop();
      this.trail();
    }
}