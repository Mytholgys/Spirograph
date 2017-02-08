function setup() {
  //check this out windowWidth / windowHeight
  createCanvas (windowWidth,windowHeight)
  frameRate (30)
  background (34,56,78)
}

function draw() {
  fill (0,0,0,0)
  stroke (random (255), random(255), random(255))
  ellipsev()
  if (keyIsDown (DOWN_ARROW))
  rectv ();
}

 function keyIsDown() {
  if(keyCode === DOWN_ARROW) {
    rectv();
  }
}

function ellipsev(){
  ellipse(500,500,random (1000), random (1000))
}

function rectv(){
  rectMode(CENTER);
  rect(500,500,random (1000), random (1000))
  
}