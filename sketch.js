function setup() {
  createCanvas(800,400);
  object=createSprite(400, 200, 50, 50);
  object2=createSprite(100,100,50,50)
}

function draw() {
  background("black");  
  object2.x=mouseX
  object2.y=mouseY
  if(abs(object.x-object2.x)<=object.width/2+object2.width/2 && 
  abs(object.y-object2.y)<=object.height/2+object2.height/2){
    object.shapeColor="red"
    object2.shapeColor="red"
  }else{
    object.shapeColor="cyan"  
    object2.shapeColor="cyan"
  }
  
  drawSprites();
}