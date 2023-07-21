
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 

function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

  var ball_options ={
    isStatic : false,
    restitution : 0.3 ,
    density : 1.2

  }
	//Create the Bodies Here.
  ball = Bodies.circle(50,350,20,ball_options)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  Ground.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
  }
}



