
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   box1 = new Box(900, 320, 20, 70);
   box2 = new Box(990, 335, 200, 10);
   box3 = new Box(1100, 320, 20, 70);
   ground = new Ground(600, 350, 1200, 20);
   paper = new Paper(200, 330, 25, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}



