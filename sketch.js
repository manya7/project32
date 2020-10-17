
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;

var boxS1boxS2,boxS3,boxS4,boxS5,boxS6,boxS7,boxS8,boxS9;

var octagon;

var slingShot;

var bg;
var backgroundImg;
var score=0;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	stand1=new Ground(700,200,200,10)
	stand2=new Ground(500,450,300,10)

	
	box1=new Box(500,430,30,30)	
	box2=new Box(530,430,30,30)	
	box3=new Box(560,430,30,30)
	box4=new Box(470,430,30,30)
	box5=new Box(440,430,30,30)
	box6=new Box(410,430,30,30)
	box7=new Box(590,430,30,30)
	box8=new Box(500,400,30,30)	
	box9=new Box(530,400,30,30)	
	box10=new Box(560,400,30,30)
	box11=new Box(470,400,30,30)
	box12=new Box(440,400,30,30)
	box13=new Box(500,370,30,30)
	box14=new Box(530,370,30,30)
	box15=new Box(470,370,30,30)
	box16=new Box(500,340,30,30)


	boxS1=new Box(700,180,30,30)	
	boxS2=new Box(730,180,30,30)	
	boxS3=new Box(670,180,30,30)
	boxS4=new Box(640,180,30,30)
	boxS5=new Box(760,180,30,30)
	boxS6=new Box(700,180,30,30)
	boxS7=new Box(730,180,30,30)
	boxS8=new Box(670,180,30,30)
	boxS9=new Box(700,180,30,30)

	octagon=new Octagon(200,200)

	
	slingShot = new SlingShot(octagon.body,{ x: 200, y: 200 } );


}


function draw() {
  rectMode(CENTER);
  if(backgroundImg){
    background(backgroundImg);
    }

  text("score:"+score,800,50) 

stand1.display();
stand2.display();


box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();

boxS1.display();
boxS1.score();
boxS2.display();
boxS2.score();
boxS3.display();
boxS3.score();
boxS4.display();
boxS4.score();
boxS5.display();
boxS5.score();
boxS6.display();
boxS6.score();
boxS7.display();
boxS7.score();
boxS8.display();
boxS8.score();
boxS9.display();
boxS9.score();

slingShot.display();

octagon.display();

getBackgroundImg()



  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(octagon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    slingShot.fly();

}
function keyPressed() {

	if (keyCode===32){
 slingShot.attach(octagon.body);


	}
	}
	async function getBackgroundImg(){

		var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
		
		var responseJSON=await response.json()
		
		console.log(responseJSON.datetime)
		
		var datetime=responseJSON.datetime
		
		var hour=datetime.slice(11,13)
		console.log(hour)
		
		if (hour>=06&&hour<=19){
			bg=background("blue");
		}
		else{
		bg=background("pink");
		
		}
	}


