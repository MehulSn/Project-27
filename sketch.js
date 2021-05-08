
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofe;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new bob(600,500,100);
    bobObject2 = new bob(500,500,100);
    bobObject3 = new bob(400,500,100);
    bobObject4 = new bob(300,500,100);
    bobObject5 = new bob(200,500,100);
	  roofe = new roof(400,100,600,20);
    rope1 = new rope(bobObject1.body,roofe.body,200,0);
    rope2 = new rope(bobObject2.body,roofe.body,100,0);
    rope3 = new rope(bobObject3.body,roofe.body,0,0);
    rope4 = new rope(bobObject4.body,roofe.body,-100,0);
    rope5 = new rope(bobObject5.body,roofe.body,-200,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofe.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed(){
  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-200,y:-200})
}


