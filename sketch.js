var player;
var food = [];
var minDist= 10000;
var minu;

function setup() {
    createCanvas(windowWidth-10, windowHeight-10);
    player = new Player();
    
    for(var i=0;i<20;i++){
        food.push(new Food());
    }
    console.log(food);
}

function draw() {
    background(0);
    player.controls();
    stroke(256);
    text('vel.x :' + player.vel.x, 10, 30);
    text('vel.y: ' + player.vel.y, 10, 50);
    player.update();
    player.display();
    
    for(let i in food){
         food[i].distance = p5.Vector.dist(player.pos,food[i].pos);
        
         if(food[i].distance<minDist){
             minDist=food[i].distance;
             minu = i;
         }
        if(food[i].distance< sqrt(player.r*player.r*2) ||food[i].distance<100 ){
            food[i].display(255,0,0);
            player.r+=0.5;
            player.colide(minu);
           } 
        else{
            food[i].display(0,255,0);
           }
        }
    if(food.length===0){
        for(var i=0;i<20;i++){
        food.push(new Food());
    }
    }
     minDist= 10000;
    
            
}












