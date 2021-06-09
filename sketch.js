var trex, trex_running, edges;
var groundImage;
var ground;
var invisibleGround
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  ground=createSprite(10,180,600,20)
ground.addImage("ground",groundImage)
invisibleGround=createSprite(10,195,600,20)
invisibleGround.visible=false;
ground.velocityX=-3 

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("yellow");
  console.log(trex.y)

  if(ground.x<0){
ground.x=200


  }
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>161){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
}
