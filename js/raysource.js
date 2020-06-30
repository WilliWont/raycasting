class raySource{
    constructor(amount,color){
      console.log("SRCLOAD");
        this.color = color;
        this.pos = createVector(windowWidth/2, windowHeight/2);
        this.rays = [];
        this.deg = 360/amount;
        for(let i = 0; i < 360; i+=this.deg){
            this.rays.push(new LightRay(this.pos,radians(i)));
        }
    }

    followMouse(){
        this.pos.set(mouseX,mouseY);
    }

    followObj(x,y){
      this.pos.set(x,y);
    }

    show(){
      fill(240); 
      ellipse(this.pos.x, this.pos.y, 32);
      //for(let ray of this.rays){
        //ray.show();
      //}
    }

    // distanceTwoPoint(p1,p2){
    //   let f1 = p2.x - p1.x;
    //   let f2 = p2.y - p1.y;
    //   return sqrt(f1*f1+f2*f2);
    // }

    look(walls){
      for(let ray of this.rays){
        let record = Infinity;
        let closest = null; 
        for(let wall of walls){
          const pt = ray.cast(wall);
      
          if(pt){
            const d = ray.distanceToWall(wall);
            if (d<record){
              record = d;
              closest = pt;
            }
          }
        }
        if(closest){
          //console.log("shortestPoint: " + pt);
          push();
          stroke(this.color);
          strokeWeight(4);
          line(this.pos.x,this.pos.y,closest.x,closest.y);
          pop();
        }
      }
    }
}