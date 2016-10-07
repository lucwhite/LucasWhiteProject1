class Eye{
  
  var r;
  var g;
  var b;
  var yMax;
  var yMin;
  
  Eye(colorR, colorG, colorB, yMaxVal, yMinVal)
  {
    r = colorR;
    g = colorG;
    b = colorB;
    yMax = yMaxVal;
    yMin = yMinVal;
  }
  void display()
  {
    ellipseMode(CENTER);
  fill(r, g, b);

  triangle(0, yMax, 200, 300, 600, 300);
  triangle(0, yMin, 200, 300, 600, 300);
  triangle(600, yMax, 300, 300, 900, 300);
  triangle(600, yMin, 300, 300, 900, 300);
  triangle(1200, yMax, 1000, 300, 600, 300);
  triangle(1200, yMin, 1000, 300, 600, 300);
  fill(225 - r, 255 - g, 255 - b);
  ellipse(width / 2, height / 2, width / 1.5, height / 1.5);
  fill(255);
  ellipse(width / 2, height / 2, height / 1.5, height / 1.5);
  fill(0);
  ellipse(width / 2, height / 2, height / 1.5 - 100, height / 1.5 - 100);
  r = (r + random(175 - r));
  g = (r + random(175 - g));
  b = (r + random(175 - b));

  if(r = 175) {
    yMax += 20;
    yMin -= 20;
    println("yMax = " + yMax + "  yMin = " + yMin);
    if(yMax == yMin) {
      r = random(255);
      
    }
  }
  }
}