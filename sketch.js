var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon = 1;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);

  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  //crear arco para disparar las flechas
  bow = createSprite(0,350,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   
}

function draw() {
 background(0);

  
  // mover el suelo
  scene.velocityX = -3;

  if (scene.x < 0){
    scene.x = scene.width/0.8;
  }
  
  //mover arco
  bow.x = World.mouseX;
  
  //liberar las flechas al presionar la barra espaciadora 
  if (keyWentDown("space")) {
    createArrow();
    
  }
   
 //Descomenta la opción correcta para obtener un número aleatorio entre 1 y 4 
 select_balloon = Math.round(random(1,4));
  
   if (World.frameCount % 40 == 0) {

    //Descomenta la sentencia switch correcta

    switch(select_balloon){
      case 1: redBalloon();
        break;
      case 2: blueBalloon();
        break;
      case 3: pinkBalloon();
        break;
      case 4: greenBalloon();
        break;
      default:break;
   }

 }
    
  drawSprites();
}


//Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.y = 330;
  arrow.x = bow.x;

  arrow.velocityY = -5;

  arrow.lifetime = 100;
  arrow.scale = 0.3;
}
//Generar globos
function redBalloon() {
  var red = createSprite(-10,Math.round(random(10, 335)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = random(0.1, 0.14);
}

function blueBalloon() {
  var blue = createSprite(-10,Math.round(random(10, 335)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = random(0.1, 0.14);
}

function greenBalloon() {
  var green = createSprite(-10,Math.round(random(10, 335)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = random(0.1, 0.14);
}

function pinkBalloon() {
  var pink = createSprite(-10,Math.round(random(100, 335)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = random(1, 1.5);
}