var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue"
  movingRect = createSprite(400,300,80,50)
  movingRect.shapeColor = "blue"
  mr=createSprite(400,100,50,80)
  mr.velocityY = 5
  fr = createSprite(400,800,80,30)
  fr.velocityY = -5
}

function draw() {
  background(0);  
  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log (movingRect.x-fixedRect.x)
bounceOff(mr,fr)

if (isTouching(movingRect,fixedRect)){

movingRect.shapeColor = "red"
fixedRect.shapeColor = "red"
}
else {
fixedRect.shapeColor = "blue"
movingRect.shapeColor = "blue"
}

  drawSprites();
}

