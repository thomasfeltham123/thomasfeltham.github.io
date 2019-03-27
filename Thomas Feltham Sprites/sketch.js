// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spaceman = [];
let speed = 20;
let counter = 0;
let sprite = spaceman[counter];
let x = 400;
let y = 400;
let background;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //background(200);
}

function preload(){
  for(let i = 1; i < 9; i++){
    spaceman.push(loadImage('assets/Sprite0' + i + '.png'));
    print(i);
  }
  background = loadImage('assets/spaceBackground.png');
}


function draw() {
  push();
  scale(1);
  image(background, windowWidth/2, height/2);
  pop();

  image(spaceman[counter], mouseX, mouseY);
  spriteCycle();
  //moving();

}




function spriteCycle(){
  if (frameCount % int(speed) === 0){
    counter ++;
    if (counter > 8) counter = 0;
  }
}

//function moving(){

  

  


//}


