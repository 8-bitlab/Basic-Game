function Player(){
    this.pos=createVector(width/2,height/2);
    this.vel=createVector(0,0);
    this.r=20;
    this.angle=0;
    
    this.display = function(){ 
        stroke(255);
        noFill();
        push();
        translate(this.pos);
        rotate(this.angle+HALF_PI);
        triangle(-this.r,this.r,this.r,this.r,0,-this.r);
        pop();
    }
  
  
  this.controls = function(){
    if(keyIsDown(37)){
        this.angle = this.angle -0.1;}
    if(keyIsDown(39)){
        this.angle = this.angle +0.1;;}
    if(keyIsDown(38)){
       var force = p5.Vector.fromAngle(this.angle);
       this.vel.add(force);}
  }
  
  this.update = function(){
      this.vel.mult(0.95);
      this.pos.add(this.vel);
      if(this.r>10){
         this.r-=0.25;
         }
  }
  
  this.colide = function(i){
      
            line(this.pos.x,this.pos.y,food[i].pos.x,food[i].pos.y);
            if(food[i].r>=0){
              food[i].r-=0.4;
            }
           if(food[i].r<0){
               console.log("remove");
               food.splice(i,1);
           }
        
  }
}