// function Planets(amplitude, color, xoff, xoff2, xoff3, yoff, yoff2) {
//   this.color = color;
//   this.amplitude = amplitude;
//   this.xoff = xoff;
//   this.xoff2 = xoff2;
//   this.xoff3 = xoff3;
//   this.yoff = yoff;
//   this.yoff2 = yoff2;

//   this.draw = function() {
//     var level = this.amplitude.getLevel();

//     xoffCalc = map(level, 0, 1, 0, this.xoff);
//     xoff2Calc = map(level, 0, 1, 0, this.xoff2);
//     xoff3Calc = map(level, 0, 1, 0, this.xoff3);
//     fill(this.color);
//     beginShape();
//     vertex(width/2 - 1, this.yoff);
//     vertex(width/2 - 1 - xoffCalc, this.yoff);
//     vertex(width/2 - 1 - xoff2Calc, this.yoff2);
//     vertex(width/2 - 1 - xoff3Calc, height - this.yoff);
//     vertex(width/2 - 1, height - this.yoff);
//     endShape();
//   }
// }


// var x;
// var y;
// var outsideRadius = 150;
// var insideRadius = 0;

// function setup() {
//   createCanvas(width, height);
//   background(204);
//   x = width/2;
//   y = height/2;
// }

// function draw() {
//   background(204);

//   var numPoints = int(map(mouseX, 0, width, 6, 60));
//   var angle = 0;
//   var angleStep = 180.0/numPoints;

//   beginShape(TRIANGLE_STRIP);
//   for (var i = 0; i <= numPoints; i++) {
//     var px = x + cos(radians(angle)) * outsideRadius;
//     var py = y + sin(radians(angle)) * outsideRadius;
//     angle += angleStep;
//     vertex(px, py);
//     px = x + cos(radians(angle)) * insideRadius;
//     py = y + sin(radians(angle)) * insideRadius;
//     vertex(px, py);
//     angle += angleStep;
//   }
//   endShape();
// }
