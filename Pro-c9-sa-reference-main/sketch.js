var box 

function setup() {
  createCanvas(800,800);
 box = createSprite(40,40,10,100)

}

function draw() 
{
   background("blue");
   if(keyDown(RIGHT_ARROW)){
     box.x = box.x + 5
   }
   if(keyDown(LEFT_ARROW)){
     box.x = box.x - 5
   }
   if(keyDown(UP_ARROW)){
     box.y = box.y - 5
   }
   if(keyDown(DOWN_ARROW)){
     box.y = box.y + 5
   }
  drawSprites()
}

