




var engine, world;
var canvas,playerB,p,C,CompB;


function setup() {
  canvas = createCanvas(600, 600);
  
   //Initialising Engine
   engine =Matter.Engine.create();
   world = engine.world;
	
   //Create Player Base and Computer Base Object
 playerB=new ComputerBase(300,random(450,height-300),180,150);
 p=new ComputerPlayer(285,playerB.body.position.y-153,50,180);
 CompB=new ComputerBase(100,random(450,height-300),180,150);
 C=new ComputerPlayer(75,CompB.body.position.y-153,50,180);


 }

function draw() {

  background(180);

  Matter.Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerB.display();
   CompB.display();


   //display Player and computerplayer
   p.display()
   C.display()

}
