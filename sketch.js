var fixedRect, movingRect;
var rect1,rect2
function setup() {
  createCanvas(1200,800);
  rect1=createSprite(50,50,40,40);
  rect2=createSprite(100,100,40,40);
  rect1.shapeColor="red";
  rect2.shapeColor="blue";
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="brown";
  fixedRect.shapeColor="purple";
}
else {
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object2.y-object1.y<object1.height/2+object2.height/2&&
    object1.y-object2.y<object2.height/2+object1.height/2){
      return true;
  
    }
    else{
      return false;
    }
}