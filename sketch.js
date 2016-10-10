var r;
var g;
var b;

var rS = 0;
var gS = 0;
var bS = 0;

var yMax;
var yMin;


function setup() {
  createCanvas(1200, 600);
  background(175, 175, 200);
  frameRate(20); //alter
  r = random(255);
  g = random(255);
  b = random(255);
  yMax = 0;
  yMin = height;

}

function draw() {

  //for (int j = 0; j > 100; j++) {
  background(200, 175, 175, 66);

  if (yMin == yMax) {
    asleep();
    rS = random(255);
    gS = random(255);
    bS = random(255);
    r = (rS + (random(-25, 25)));
    g = (gS + (random(-25, 25)));
    b = (bS + (random(-25, 25)));

    if (random(1) < (.01) || mouseIsPressed) {
      awake();
    }
  } else {
    if(mouseIsPressed)
    {
      awake();
    }
    strokeWeight(5);
    ellipseMode(CENTER);
    fill(r, g, b);
    triangle(0, yMax, 200, 300, 600, 300);
    fill(g, b, r);
    triangle(0, yMin, 200, 300, 600, 300);
    fill(b, r, g);
    triangle(600, yMax, 300, 300, 900, 300);
    fill(r, g, b);
    triangle(600, yMin, 300, 300, 900, 300);
    fill(g, b, r);
    triangle(1200, yMax, 1000, 300, 600, 300);
    fill(b, r, g);
    triangle(1200, yMin, 1000, 300, 600, 300);
    fill(225 - r, 255 - g, 255 - b);
    if (yMin > height) {
      ellipse(width / 2, height / 2, width / 1.5, height / 1.5);
      fill(255);
      ellipse(width / 2, height / 2, height / 1.5, height / 1.5);
      fill(rS, gS, bS);
      ellipse(width / 2, height / 2, height / 1.5 - 100, height / 1.5 - 100);
    } else {
      fill(225 - r, 255 - g, 255 - b);
      ellipse(width / 2, height / 2, width / 1.5, yMin / 1.5);
      fill(255);
      ellipse(width / 2, height / 2, height / 1.5, yMin / 1.5);
      fill(rS, gS, bS);
      ellipse(width / 2, height / 2, height / 1.5 - 100, yMin / 1.5 - 100);
    }
    //}
    /*
    r = ((r + random(175 - r)) / 2);
    g = ((r + random(175 - r)) / 2);
    b = ((r + random(175 - r)) / 2);
    */
    r = (rS + (random(-12, 12)));
    g = (gS + (random(-12, 12)));
    b = (bS + (random(-12, 12)));








    yMax += 5;
    yMin -= 5;
    println("yMax = " + yMax + "  yMin = " + yMin);

  }

  /*
  fill(255);
  ellipse(width / 2, height / 2, width / 1.5, height / 1.5);
  fill(255);
  ellipse(width / 2, height / 2, height / 1.5, height / 1.5);
  fill(0);
  ellipse(width / 2, height / 2, height / 1.5 - 100, height / 1.5 - 100);
  */




  //wobblyTris(0,0,200,300,600,300);

}

function randomlyBright() {

}

function awake() {
  yMax = 0;
  yMin = height;
  stroke(rS, gS, bS);

}

function asleep() {
  strokeWeight(5);
  stroke(0);
  line(0, height / 2, width, height / 2);

  stroke(250, 225, 225);
  noFill();
  bezier(0, height / 2, width / 2 - 50, height / 2 - 25, width / 2 + 50, height / 2 - 25, width, height / 2);
  bezier(0, height / 2, width / 2 - 50, height / 2 + 25, width / 2 + 50, height / 2 + 25, width, height / 2);
}

function wobblyTris(x1, y1, x2, y2, x3, y3) {
  //var rand = (int)random(1,4);

  bezier(x1, y1, ((x1 - x2) / 2) + (x1 / 2), ((y1 - y2) / 2) + (y1 / 2), ((x1 - x2) / 2) - (x1 / 2), ((y1 - y2) / 2) - (y1 / 2), x2, y2);

  /*
  if(rand == 1)
  {
    triangle(x1,y1,x2,y2,x3,y3);
  }
  if(rand == 2)
  {
    bezier(x1,y1,(x1-x2)+(x1/2),(y1-y2)+(y1/2),(x1-x2)-(x1/2),(y1-y2)-(y1/2),x2,y2);
  }
  if(rand == 3)
  {
    
  }
  */
}