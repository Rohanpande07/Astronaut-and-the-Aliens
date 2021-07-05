class Astronaut{
    constructor(x,y,width,height){
        //astronaut = createSprite(x,y,width,height);
    }
    loadImages(){
        astronautImg1 = loadAnimation("images/astronaut1.png");
        astronautImg2 = loadAnimation("images/astronaut2.png");
        astronautImg3 = loadAnimation("images/astronaut3.png");
        astronautImg4 = loadAnimation("images/astronaut4.png");
        astronautImg5 = loadAnimation("images/astronaut5.png");
        astronautImg6 = loadAnimation("images/astronaut6.png");
    }
    addingAnimation(){
        astronaut.addAnimation("astronaut1",astronautImg1);
        astronaut.addAnimation("astronaut2",astronautImg2);
        astronaut.addAnimation("astronaut3",astronautImg3);
        astronaut.addAnimation("astronaut4",astronautImg4);
        astronaut.addAnimation("astronaut5",astronautImg5);
        astronaut.addAnimation("astronaut6",astronautImg6);
    }
    movingAstronaut(){
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
    }
}