var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX = speed;
  wall=createSprite(1500, 200, 60, height/2);
}

function draw() {
  background(0); 
  if(car.isTouching(wall)){
   car.velocityX=0;
   deformation=0.5*weight*speed*speed/22500
   if(deformation>100){
    car.setColour="green"
  }else if(deformation>100||deformation>180){
    car.setColour="yellow"
  }else if (deformation<180){
  car.setColour="red"
  }
  }
  
  
  drawSprites();
 }