 var astronaut, astronautImg;
 var bg;
 var laser, laserIMG;

 function preload(){
     astronautImg = loadImage("images/astronaut3.png");
     bg = loadImage("images/bg/space4.jpg");
     laserIMG = loadImage("images/lasers/laser_red.png");
 }


 function setup(){
     createCanvas(1000,500);

     astronaut = createSprite(100,250,50,50);
     astronaut.addImage(astronautImg);
     astronaut.scale = 0.5;
   
     laser = createSprite(215,226,50,50);
     laser.addImage(laserIMG);
     laser.scale = 0.05;
     laser.visible = false;
     laser.lifetime = 1000;
 }
 function draw(){
     background(bg);

     if(keyDown("left")){
         astronaut.x -= 5;
         laser.x -= 5;
     }

     if(keyDown("right")){
        astronaut.x += 5;
        laser.x += 5;
    }

     if(keyDown("up")){
        astronaut.y -= 5;
        laser.y -= 5;
    }
   
     if(keyDown("down")){
        astronaut.y += 5;
        laser.y += 5;
    }
  
     if(keyDown(32)){
        laser.velocityX = 5;
        laser.visible = true;
    }

     drawSprites();
 }
