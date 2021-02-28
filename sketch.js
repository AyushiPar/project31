const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var engine,world;

function setup() {
  createCanvas(480,600);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,590,480,20);

  for(var k = 0; k <= width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,55,10));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,155,10));
  }

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,255,10));
  }


}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }

  for(var r = 0; r < plinkos.length; r++){
    plinkos[r].display();
  }
  ground.display();

}