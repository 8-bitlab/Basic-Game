function Food(){
      this.pos = createVector(random(width),random(height));
      this.r = random(5,30)
      this.distance = 0 ;
    
    
    
this.display = function(r,g,b){
          push();
          translate(this.pos.x,this.pos.y);
          fill(r,g,b);
    text(this.r,5, 5);
          ellipse(0,0,this.r);
    pop();
          
      }

}