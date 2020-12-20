const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var trash1,trash2,trash3,paper1,ground;

var engine , world;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,680,800,20)
	trash1=new Dustbin(500,610,20,100);
	trash2=new Dustbin(610,650,200,20);
	trash3=new Dustbin(720,610,20,100);
	paper1=new Paper(50,650,40)
	
	
	
  
}


function draw() {
 // rectMode(CENTER);
 Engine.update(engine);
  background("black");
  ground.display();
  trash1.display();
  trash2.display();
  trash3.display();
  paper1.display();
 
  console.log(paper1.body.position.x)
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});
	}
}


