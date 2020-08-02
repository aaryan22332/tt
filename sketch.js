var bullet, wall, speed



function setup() {
  createCanvas(800,400);
  
  speed = random(55,90)
  weight = random(650,200,60,200)

bullet = createSprite(400, 200, 50, 50);
wall = createSprite(650,200,60,200)
bullet.shapeColor = "black";
wall.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  
  wall.debug = true
  bullet.debug = true
  if(keyDown("space"))
  {
    bullet.x=50;
    bullet.y=200;
    bullet.veocityX=speed;
  }
  if(wall.x -bullet.x<(bullet.width-wall.width)/2);
  {
    bullet.velocityY=8;

    bullet.y = 200
    bullet.velocityX=speed;
  }
  if(wall.x - (bullet.x<bullet.width-wall.width)/2)

 
  {
    bullet.velocityX=0;bullet.shapeColor = color(255,0,0)
  }
 
  {
    bullet.shapeColor = color(230,230,0)
  } 
  
  {
    bullet.shapeColor=color(0,255,0);
  }
  drawSprites();
}
