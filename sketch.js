const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var backgroundImg,girlImg;
var girl;
var snow1;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  girlImg = loadImage("girl.png")
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

 girl = createSprite(400, 200, 50, 50);
 girl.addImage(girlImg)
 girl.scale = 0.4

 snow1 = new Snow(100,0,70,70);
 snow2 = new Snow(200,0,70,70);
 snow3 = new Snow(300,0,70,70);
 snow4 = new Snow(250,0,70,70);
 snow5 = new Snow(350,0,70,70);
 snow6 = new Snow(400,0,70,70);
 snow7 = new Snow(500,0,70,70);
 snow8 = new Snow(450,0,70,70);
 snow9 = new Snow(550,0,70,70);
 snow10 = new Snow(600,0,70,70);
 snow11 = new Snow(700,0,70,70);
 snow12= new Snow(650,0,70,70);
 snow13 = new Snow(750,0,70,70);
 snow14 = new Snow(800,0,70,70);
 snow15 = new Snow(900,0,70,70);
 snow16 = new Snow(850,0,70,70);
 snow17= new Snow(950,0,70,70);
 snow18 = new Snow(1000,0,70,70);
 snow19 = new Snow(1100,0,70,70);
 snow20 = new Snow(1050,0,70,70);
 snow21 = new Snow(1150,0,70,70);
 snow22 = new Snow(1200,0,70,70);


}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
  snow21.display();
  snow22.display();
  if(keyDown("RIGHT")){
  girl.velocityX = 2

  }
  if(keyWentUp("RIGHT")){
  girl.velocityX = 0
  
    }
if(keyDown("LEFT")){
  girl.velocityX = -2
    
      }
if(keyWentUp("LEFT")){
  girl.velocityX = 0
      
        }
if(keyDown("DOWN")){
  girl.velocityY = 2
          
            }
if(keyWentUp("DOWN")){
  girl.velocityY = 0
            
              }
}
