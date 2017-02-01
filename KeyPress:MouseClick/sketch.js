var circleX = 10
var circleY = 390

function setup() {
 createCanvas(400,600)
 
}

function draw() {
  
  background(222, 213, 202);
  
  // if(mouseIsPressed) {
  // noStroke();
  // fill(0, 0, 0, 50);
  // ellipse(mouseX, mouseY, 10, 10);
  // }
  
  strokeWeight(0);
  
  if (keyIsPressed === true) {
    fill(255, 191, 114);
  } else {
    fill(241, 241, 241);
  }
  //fill(241, 241, 241);
  ellipse(circleY,350,350,350); 
  
  if (keyIsPressed === true) {
    fill(241, 241, 241);
  } else {
    fill(255, 191, 114);
  }
  //fill(255, 191, 114); 
  ellipse(circleX,150,240,240); 
  
  strokeWeight(4); 
  if (mouseIsPressed) {
    line(160, 450, 220, 280 );
    line(180, 500, 240, 230 );
    line(180, 580, 270, 160 );
    line(210, 560, 280, 190 );
   fill(0);
  } else {
    fill(255);
    print(mouseIsPressed);
  }
  
  if (mouseIsPressed) {
    line(40, 260, 280, 360);
    line(120, 310, 360, 400);
    line(100, 310, 320, 395);
    line(60, 320, 340, 420);
    line(130, 370, 310, 430);
   fill(0);
  } else {
    fill(255);
    print(mouseIsPressed);
  }
 
  circleX = circleX+1
  circleY = circleY-1

}

//line(x1,y1,x2,y2)