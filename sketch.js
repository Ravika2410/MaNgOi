const world = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var myEngine,myWorld,body;
var t;
var m,a,n,g,o;
var s;
var b;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
    t=new tree(800,300);

    m=new mango(750,285);

    s=new stone(290,390,20,20);

    b=new boy(300,400);

  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  Matter.Engine.update(myEngine);

  t.display();
 m.display();
 s.display();
 b.display();
}



