
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball_options={
		isStatic:false,
        restitution:0.3,
        friction:0,
		density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj = new Ground(width/2,670,width,20);
  groundObj.show();
  display(); 
   Engine.update(engine);
}

function  show(){
var pos = this.body.position;
push();
rectMode(CENTER);
stroke(255);
fill(127);
rect(pos.x,pos.y,this.w,this.h);
pop();
}