var helicopterIMG, helicopterSprite, packageIMG;
var packageBody,ground
var pillar,pillar2,pillar3;
var packageSprite = {

	
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	pillar=createSprite(400,height-50,200,20);
	pillar.shapeColor=color(255,0,0)
   
	pillar2=createSprite(490,height-90,20,100);
	pillar2.shapeColor=color(255,0,0)

	pillar3=createSprite(290,height-90,20,100);
	pillar3.shapeColor=color(255,0,0)


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
   

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	World.add(world,pillar)
	World.add(world,pillar2)
	World.add(world,pillar3)


	Engine.run(engine);

  



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 ;

  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



