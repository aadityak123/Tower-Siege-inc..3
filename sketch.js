const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Mattter.Bodies;

var base1;





function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  base1 = new Base(400,200)

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

base1.display()

  drawSprites();
}