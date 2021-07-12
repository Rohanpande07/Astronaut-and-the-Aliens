 var astronaut, astronautImg1, astronautImg2, astronautImg3, astronautImg4, astronautImg5, astronautImg6;
 var backGround, backGround2, bg;
 var alien, alienImg, alienG;
 var laser, laser2, laserIMG, laserIMG2, laserIMG3, laserG;
 var asteroid, asteroidIMG, asteroidG;
 var life = 3, score = 0;
 var gameState = 0;
 var bossAlien, bossAlienImg, bossAlienG;
 var font;

 function preload(){
    astronautImg1 = loadAnimation("images/astronaut1.png");
    astronautImg2 = loadAnimation("images/astronaut2.png");
    astronautImg3 = loadAnimation("images/astronaut3.png");
    astronautImg4 = loadAnimation("images/astronaut4.png");
    astronautImg5 = loadAnimation("images/astronaut5.png");
    astronautImg6 = loadAnimation("images/astronaut6.png");

    bossAlienImg = loadImage("images/aliens/bossalien.png");

     bg = loadImage("images/bg/space4.jpg");
     bg2 = loadImage("images/aliens/spaceship.jpg");

     alienImg = loadImage("images/aliens/alien.png");
     laserIMG = loadAnimation("images/lasers/laser_red.png");
     asteroidIMG = loadImage("images/asteroid2.png");
     laserIMG2 = loadAnimation("images/lasers/laser_blue.png");
     laserIMG3 = loadImage("images/lasers/laser_green.png");

     font = loadFont("FUTUR1.TTF");
 }


 function setup(){
     createCanvas(1200,600);

     backGround = createSprite(600,300,1500,600);
     backGround.addImage("space",bg);
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
     laserG = new Group();
     bossAlienG = new Group();
 }
 function draw(){

    background(bg2);

    if(gameState === 1){
        backGround.velocityX = -8;

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
    
           if(keyDown(32)){
             spawnLaser();  
           }

           if(score > 15){
            try{
            backGround.visible = false;
            astronaut.changeAnimation("astronaut5",astronautImg5);
            laser.changeAnimation("laser_blue",laserIMG2);
            backGround.changeAnimation("spaceship",bg2);
            backGround.scale = 2.5;
            backGround.velocityX = 0;
            createBossAlien();
            if(frameCount % 100 === 0){
              laser2 = createSprite(bossAlien.x-55,bossAlien.y-30,50,50);
              laser2.addImage(laserIMG3);
              laser2.scale = 0.04;
              laser2.velocityX = -8;
            }
            if(astronaut.isTouching(laser2) || astronaut.isTouching(bossAlienG)){
                astronaut.destroy();
            }
            if(laserG.isTouching(bossAlienG)){
                score = score + 1;
                laserG.destroyEach();
            }
            alienG.destroyEach();
            asteroidG.destroyEach();
        }catch(Exception){
            console.log(Exception);
        }
      }
    
           if(alienG.isTouching(laserG)){
               alienG.destroyEach();
               laserG.destroyEach();
               score = score + 1;
           } 

           if(score <= 15){
            spawnAliens();
            spawnAsteroids();
           }
    
           if(alienG.isTouching(astronaut) || asteroidG.isTouching(astronaut)){
               astronaut.destroy();
               console.log(life);
               life = life - 1;
               score = 0;
           }
        }

        if(life === 0 || score === 20){
            astronaut.destroy();
            bossAlienG.destroyEach();
            laser2.destroy();
            gameState = 2;
        }

       if(gameState === 2){
        textSize(45);
        textFont(font);
        fill(255);
        text("Game End",600,300);
       }
       
     drawSprites();
     textSize(25);
     fill(255);
     text("Score : "+score,600,100);
     text("Life :"+life,600,50);
     if(gameState === 0){
        fill("white");
        textSize(30);
        text("Press 'Enter' to start",200,320);
        if(keyDown("enter")){
            gameState = 1;
        }
    }
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

 function spawnLaser(){
    laser = createSprite(astronaut.x+75,astronaut.y-20,50,50);
    laser.addAnimation("laser_red",laserIMG);
    laser.addAnimation("laser_blue",laserIMG2);
    laser.scale = 0.04;
    laser.velocityX = 7;
    laser.lifetime = 450;
    laserG.add(laser);
 }

 function createBossAlien(){
    bossAlien = createSprite(1100,300,50,50);
    bossAlien.addImage(bossAlienImg);
    bossAlien.scale = 0.2;
    bossAlienG.add(bossAlien);
 }