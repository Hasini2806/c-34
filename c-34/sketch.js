const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var slingshot;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(700,320,70,70);
    box7 = new Box(700,320,70,70);
    box8 = new Box(700,320,70,70);
    box11 = new Box(900,320,70,70);
    box12 = new Box(900,320,70,70);
    box13 = new Box(900,320,70,70);
    box14 = new Box(900,320,70,70);
    box15 = new Box(900,320,70,70);
    box16 = new Box(900,320,70,70);
   
 //   box9 = new Box(700,320,70,70);
 //   box10 = new Box(700,320,70,70);
    ball1 =  new Ball(300,300,80,80);
    
    slingshot = new SlingShot(ball1.body,{x:550, y:50});
}

function draw(){
    background("grey");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
 //   box9.display();
  //  box10.display();
    ball1.display();
    ground.display();
    
   slingshot.display();    
}

// function mouseDragged(){
//     if (gameState!=="launched"){
//         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//     }
// }


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }

