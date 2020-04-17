var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
}

function draw() {
  background(0,0,0);  
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
 movingRect.shapeColor = "green";
 fixedRect.shapeColor ="green";
 if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y < movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 
  && fixedRect.y-movingRect.y < movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor = "red";
 fixedRect.shapeColor ="red";
  }

  drawSprites();
}