
var snake;
var compt = 0;
var scl = 20;


function setup() {
  
    createCanvas(1160,600);
  
    snake = new Snake();
    
    frameRate(5);
  
  
  
}

function draw() {
  
    background(76);
    
    for(var x = 0; x <= width + scl + 50; x+= scl){
        
        line(x, 0, x, height);
            
    }
  
    for(var y = 0; y <= height + scl +50; y+= scl){
        
        line(0, y, width, y);
      
    }
  
    snake.update();
    snake.display();
    
    if(compt > 0) compt --;
    
}


function keyPressed(){
    
    if((keyCode == DOWN_ARROW && compt == 0)){
        var oppositeDir = createVector(0,-1);
        if(oppositeDir.x != snake.dir.x && oppositeDir.y != snake.dir.y) snake.dir = createVector(0,1); 
        compt = 1;
    }
    
    else if((keyCode == UP_ARROW && compt == 0)){
        var oppositeDir = createVector(0,1);
        if(oppositeDir.x != snake.dir.x && oppositeDir.y != snake.dir.y) snake.dir = createVector(0,-1); 
        compt = 1;
    }
    
    else if((keyCode == LEFT_ARROW && compt == 0)){
        var oppositeDir = createVector(1,0);
        if(oppositeDir.x != snake.dir.x && oppositeDir.y != snake.dir.y) snake.dir = createVector(-1,0); 
        compt = 1;
    }
    
    else if((keyCode == RIGHT_ARROW && compt == 0)){
        var oppositeDir = createVector(-1,0);
        if(oppositeDir.x != snake.dir.x && oppositeDir.y != snake.dir.y) snake.dir = createVector(1,0); 
        compt = 1;
    }
    
}