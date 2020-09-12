var rect1,rect2;


function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(200,200,50,80);
  rect2 = createSprite(400,200,80,30);
  rect1.shapeColor = ("white");

  rect1.velocityY = 5;
  rect2.velocityY = -5;

  rect2.shapeColor = ("blue");
  
  
}

function draw() {
  background(0);  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
  
  if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2
    && rect1.y - rect2.x < rect1.width/2 + rect2.width/2){
      rect2.velocityX = rect2.velocityY *(-1);
      rect1.velocityX = rect1.velocityY *(-1);

    }

    if(rect2.y - rect1.y < rect1.height/2 + rect2.height/2
      && rect1.y - rect2.y < rect1.height/2 + rect2.height/2){
      rect1.velocityY = rect1.velocityY *(-1);
      rect2.velocityY = rect2.velocityy *(-1);

      }
      
  /*if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2
    && rect1.y - rect2.x < rect1.width/2 + rect2.width/2
    && rect1.y - rect2.y < rect2.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2)
  {
  rect1.shapeColor = ("purple");
  rect2.shapeColor = ("purple");

  }
  else {
    rect1.shapeColor = ("white");
    rect2.shapeColor = ("blue");

  }*/
  
  drawSprites();
}