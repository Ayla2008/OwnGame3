var explorer, expWalking
  var bg, bgImg
  var ground
  var lion,lionImg

function preload() {
  expWalking = loadAnimation("assets/E1 (2).png","assets/E2 (2).png","assets/E3 (2).png","assets/E4 (2).png","assets/E5 (2).png",)
  bgImg = loadImage("assets/background2.jpg")
  lionImg = loadImage("assets/lion.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2)
  bg.addImage(bgImg)
  bg.scale = 3.2
  bg.velocityX = -3
  
  explorer = createSprite(150, 200, 50, 50);
  explorer.scale = 0.7
  explorer.addAnimation("walking",expWalking)

  

  ground = createSprite(width/2, height-50,1000,10)
  ground.visible=false

  
  
  
}


function draw() {
  background(" green");
  console.log(explorer.y)  
  if(bg.x<0){
    bg.x = width/2
  }

  //gravity
  explorer.velocityY = explorer.velocityY+0.5
  explorer.collide(ground)

  //explorer jumping
  if (keyDown("UP_ARROW" )&& explorer.y>450){
    explorer.velocityY = -10
}
  if(frameCount%300==0){
createLion()
  }

drawSprites();
}

//keep ducking images ready


function createLion(){
  lion = createSprite(width, height-100)
  lion.velocityX = -3
  lion.addImage(lionImg)
  lion.scale=0.5

}