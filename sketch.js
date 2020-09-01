
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper;
var box1, box2, box3;
var ground

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	
paper = new Paper(30,340,15);
ground = new Ground(width/2,height-20,width,10)
box1 = new Box(750,515,10,100);
box2 = new Box(650,515,10,100);
box3 = new Box(700,560,100,10);
	Engine.run(engine);
  
}


function draw() {
  //keyPressed();
  background(0);
  paper.display();
  ground.display();
  box3.display();
  box1.display();
  box2.display();
}

function keyPressed(){
console.log("Hi")
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:40,y:-40})
		console.log("Hello")
	}
}

1



