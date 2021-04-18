//Creating variables:-
var dropIMG;
var ground;
var time = 0;
var DropGroup;
var gameState;
var spark;
var sparkIMG;
var spark2;

function preload(){
  dropIMG = loadImage("unnamed.png");
  boyIMG = loadImage("girl-under-umbrella-black-white.png");
  bg = loadImage("rain-wallpaper-scenary.jpg");
  sparkIMG = loadImage("Spark_Charging_Charge_Electricity-512.png");
}

function setup() {
  createCanvas(700,1100);
  // DropGroup = createGroup();
  //Creating the boy sprite:-
  boy = createSprite(400,920,60,60);
  boy.addImage(boyIMG);
  boy.scale = 0.6;

  
}

function draw() {
  background(0);  

  for(var i=0;i<10;i++){
    var drop2 = createSprite(500,0,60,60);
    drop2.addImage(dropIMG);
    drop2.scale = 0.1;
    drop2.velocityY = 150;
    drop2.x = random(50,990);
    drop2.y = random(0,600);
  }

 
    
  
  if(frameCount%10===0){
    spark = createSprite(200,50,60);
    spark.addImage(sparkIMG);
              spark.scale = 0.9
              spark.x = random(400,400);
  }

  switch(frameCount){
    case 10:  spark.x = random(400,490);
              spark.y = random(400,40);
             
              spark.addImage(sparkIMG);
              spark.scale = 0.9
    break;
  }
  
drawSprites();
  }