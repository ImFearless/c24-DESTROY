const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
 var b0x
var box,bax,box2
var equake
var myengine,myworld;
var ball;
var pig1,little;
var lagg,log,log2,lagg2;
var rage;
function setup() {
  createCanvas(800,800);

  myengine=Engine.create();
  myworld=myengine.world;
b0x=new bibi(450,750,70,60)
box=new bibi(750,750,70,60)
bax=new bibi(450,650,70,60)
box1=new bibi(750,650,70,60)
box2=new bibi(600,550,70,60)

rage=new red(150,200,90,40)


pig1=new pig(600,750,60,50)
little=new pig(600,650,60,50)

lagg=new lag(600,700,10,400,PI/2)
lagg2=new lag(600,600,10,400,PI/2)
log=new lag(550,550,10,150,PI/3)
log2=new lag(650,550,10,150,-PI/3)
equake=new quake(400,800,800,50)

}

function draw() {
  background(0); 
  Engine.update(myengine)
b0x.display()
box.display()
pig1.display()
equake.display()
lagg.display()
lagg2.display()
bax.display()
 box1.display()
 little.display()
 box2.display()
log.display()
log2.display()
 rage.display() 
  
}