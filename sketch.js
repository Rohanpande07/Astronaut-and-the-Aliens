 var astronaut, astronautImg1, astronautImg2, astronautImg3, astronautImg4, astronautImg5, astronautImg6;
 var backGround, bg;
 var alien, alienImg, alienG;
 var laser, laserIMG;
 var asteroid, asteroidIMG, asteroidG;
 var life = 3, score = 0;


 function preload(){
     astronautImg1 = loadAnimation("images/astronaut1.png");
     astronautImg2 = loadAnimation("images/astronaut2.png");
     astronautImg3 = loadAnimation("images/astronaut3.png");
     astronautImg4 = loadAnimation("images/astronaut4.png");
     astronautImg5 = loadAnimation("images/astronaut5.png");
     astronautImg6 = loadAnimation("images/astronaut6.png");
     bg = loadImage("images/bg/space4.jpg");
     alienImg = loadImage("images/aliens/alien.png");
     laserIMG = loadImage("images/lasers/laser_red.png");
     asteroidIMG = loadImage("images/asteroid2.png");
 }


 function setup(){
     createCanvas(1200,600);

     backGround = createSprite(400,300,1200,600);
     backGround.addImage(bg);
     backGround.velocityX = -8;
     backGround.scale = 1.5;

     astronaut = createSprite(100,250,50,50);
     astronaut.addAnimation("astronaut1",astronautImg1);
     astronaut.addAnimation("astronaut2",astronautImg2);
     astronaut.addAnimation("astronaut3",astronautImg3);
     astronaut.addAnimation("astronaut4",astronautImg4);
     astronaut.addAnimation("astronaut5",astronautImg5);
     astronaut.addAnimation("astronaut6",astronautImg6);
     astronaut.scale = 0.4;

     alienG = new Group();
     asteroidG = new Group();
 }
 function draw(){

    // background(bg);

    if(backGround.x < 0){
        backGround.x = width/2;
    }

        astronaut.changeAnimation("astronaut3",astronautImg3);

        if(keyDown("left")){
            astronaut.x -= 5;
            astronaut.changeAnimation("astronaut4",astronautImg4);
        }
   
        if(keyDown("right")){
           astronaut.x += 5;
           astronaut.changeAnimation("astronaut3",astronautImg3);
       }
   
        if(keyDown("up")){
           astronaut.y -= 5;
       }
      
        if(keyDown("down")){
           astronaut.y += 5;
       }

       console.log(astronaut.y);
       console.log(mouseY);

       if(keyDown(32)){
        laser = createSprite(astronaut.x+75,astronaut.y-20,50,50);
        laser.addImage(laserIMG);
        laser.scale = 0.04;
        laser.velocityX = 7;
        laser.lifetime = 450;
       }

       if(alienG.isTouching(laser)){
           alienG.destroyEach();
       }

       if(alienG.isTouching(astronaut) || asteroidG.isTouching(astronaut)){
           astronaut.velocityY = 20;
           life = life -1;
           if(life === 0){
            textSize(45);
            fill(255);
            text("Game End",600,300);
           }
       }

     spawnAliens();
     spawnAsteroids();
     drawSprites();

     textSize(25);
     fill(255);
     text("Score : "+score,600,100);
     text("Life :"+life,600,50);
 }

 function spawnAliens(){
    if(frameCount % 150 === 0){
     alien = createSprite(1200,random(50,550),50,50);
     alien.addImage(alienImg);
     alien.velocityX = -5;
     alien.scale = 0.15;
     alien.lifetime = 400;
     alienG.add(alien);
    }
 }

 function spawnAsteroids(){
    if(frameCount % 200 === 0){
     asteroid = createSprite(1200,random(50,550),50,50);
     asteroid.addImage(asteroidIMG);
     asteroid.velocityX = -5;
     asteroid.scale = 0.1;
     asteroid.lifetime = 400;
     asteroidG.add(asteroid);
    }
 }