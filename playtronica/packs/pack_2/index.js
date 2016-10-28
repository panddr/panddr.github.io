var x;
var y;
var triangleX,
    triangleY;
var outsideRadius = 200;
var insideRadius = 150;
var amplitudeShit1,
    amplitudeShit2,
    amplitudeShit3,
    amplitudeShit4;

var count = 100;
var t;

var randomBg;

function setup() {
  midi();
  createCanvas(windowWidth, windowHeight);

  animationInit = [];

  for (var i = 0; i < dataP5.length; i++) {
    var amplitude;
    amplitude = new p5.Amplitude();
    amplitude.setInput(dataP5[i].sound);
    if (dataP5[i].animation == "TriangleShape") {
      animationInit.push(eval('new ' + dataP5[i].animation + '(amplitude, "red", 1000, 300, 1600, height/10, height/3)'));
    } else if (dataP5[i].animation == "Wave") {
      animationInit.push(eval('new ' + dataP5[i].animation + '(amplitude, -100, height, 120, "white")'));
    }
  }

  amplitudeShit1 = new p5.Amplitude();
  amplitudeShit1.setInput(dataP5[0].sound);

  amplitudeShit2 = new p5.Amplitude();
  amplitudeShit2.setInput(dataP5[1].sound);

  amplitudeShit3 = new p5.Amplitude();
  amplitudeShit3.setInput(dataP5[2].sound);

  amplitudeShit4 = new p5.Amplitude();
  amplitudeShit4.setInput(dataP5[3].sound);

  amplitudeShit5 = new p5.Amplitude();
  amplitudeShit5.setInput(dataP5[4].sound);

  amplitudeShit6 = new p5.Amplitude();
  amplitudeShit6.setInput(dataP5[5].sound);

  amplitudeShit7 = new p5.Amplitude();
  amplitudeShit7.setInput(dataP5[6].sound);

  amplitudeShit8 = new p5.Amplitude();
  amplitudeShit8.setInput(dataP5[7].sound);

  amplitudeShit9 = new p5.Amplitude();
  amplitudeShit9.setInput(dataP5[8].sound);

  amplitudeShit10 = new p5.Amplitude();
  amplitudeShit10.setInput(dataP5[9].sound);

  amplitudeShit11 = new p5.Amplitude();
  amplitudeShit11.setInput(dataP5[10].sound);

  amplitudeShit12 = new p5.Amplitude();
  amplitudeShit12.setInput(dataP5[11].sound);

  amplitudeShit13 = new p5.Amplitude();
  amplitudeShit13.setInput(dataP5[12].sound);

  amplitudeShit14 = new p5.Amplitude();
  amplitudeShit14.setInput(dataP5[13].sound);

  amplitudeShit15 = new p5.Amplitude();
  amplitudeShit15.setInput(dataP5[14].sound);

  amplitudeShit16 = new p5.Amplitude();
  amplitudeShit16.setInput(dataP5[15].sound);

  x = width/2;
  y = height/2;

  t = 0;

  triangleX = width/2;
  triangleY = height/2;
}

function draw() {
  randomSeed(random(255));
  var r = map(amplitudeShit2.getLevel(), 0, 0.1, 255, random(255));
  var g = map(amplitudeShit2.getLevel(), 0, 0.1, 255, random(255));
  var b = map(amplitudeShit2.getLevel(), 0, 0.1, 255, random(255));
  background(r,g,b);
  noStroke();


  // for (var i = 0; i < dataP5.length; i++) {
  //   animationInit[i].draw();
  // }

  // randomSeed(random(100000));

  var angle = 0;
  var angleStep = 180.0/100;
  var amplitudeShit8Height = map(amplitudeShit8.getLevel(), 0, 10, 0, 140);
  beginShape();
  for (var i = 0; i < width; i++) {
    var rad = 1000 * noise(i * 0.0005, t * 0.005);
    var py = height + sin(radians(rad))*height/3*amplitudeShit8Height;
    angle += angleStep;
    vertex(i, py);
    fill("#044DA1");
  }
  t++;
  vertex(width, height);
  vertex(0, height);
  endShape();



  var angle = 0;
  var angleStep = 180.0/100;
  var amplitudeShit6Height = map(amplitudeShit6.getLevel(), 0, 10, 0, 140);
  beginShape();
  for (var i = 0; i < width; i++) {
    var rad = 1000 * noise(i * 0.001, t * 0.005);
    var py = sin(radians(rad))*height/3*amplitudeShit6Height;
    angle += angleStep;
    vertex(i, py);
    fill("#6BBF71");
  }
  t++;
  vertex(width, 0);
  vertex(0, 0);
  endShape();


  // var angle = 0;
  // var angleStep = 180.0/100;
  // var amplitudeShit7Height = map(amplitudeShit7.getLevel(), 0, 10, 0, 40);
  // beginShape();
  // for (var i = 0; i < width; i++) {
  //   var rad = 1000 * noise(i * 0.001, t * 0.005);
  //   var py = height + sin(radians(rad))*height/3*amplitudeShit7Height;
  //   angle += angleStep;
  //   vertex(i, py);
  //   fill("#EE3124");
  // }
  // t++;
  // vertex(width, height);
  // vertex(0, height);
  // endShape();



  // var angle = 0;
  // var angleStep = 180.0/100;
  // var amplitudeShit8Height = map(amplitudeShit8.getLevel(), 0, 10, 0, 40);
  // beginShape();
  // for (var i = 0; i < width; i++) {
  //   var rad = 1000 * noise(i * 0.002, t * 0.005);
  //   var py = sin(radians(rad))*height/3*amplitudeShit8Height;
  //   angle += angleStep;
  //   vertex(i, py);
  //   fill("#ED8524");
  // }
  // t++;
  // vertex(width, 0);
  // vertex(0, 0);
  // endShape();


  fill('#FBDA2B');
  noStroke();
  var numPoints = int(map(amplitudeShit14.getLevel()*1000, 0, width*2, 0, 1000));
  var angle = 0;
  var angleStep = 720.0/numPoints;
  beginShape(TRIANGLE_STRIP);
  outsideRadius = height + amplitudeShit14.getLevel()*height;
  insideRadius = amplitudeShit14.getLevel();
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();



  var faderX = map(amplitudeShit4.getLevel(), 0, 0.5, 1, 0);
  var circleRadius = map(amplitudeShit4.getLevel(), 0, amplitudeShit4.getLevel(), 0, 11);
  var angle = radians(360/count);
  randomSeed(0);

  for (var i = 0; i < count; i++) {
    var randomX = random(0,width);
    var randomY = random(0,height);
    var circleX = width/2 + cos(angle*i)*300;
    var circleY = height/2 + sin(angle*i)*300;

    var x = lerp(randomX, circleX, faderX);
    var y = lerp(randomY, circleY, faderX);

    fill(0);
    ellipse(x,y,circleRadius,circleRadius);
  }


  var faderX = map(amplitudeShit16.getLevel(), 0, 0.5, 1, 0);
  var circleRadius = map(amplitudeShit16.getLevel(), 0, amplitudeShit16.getLevel(), 0, 11);
  var angle = radians(360/count);
  randomSeed(0);

  for (var i = 0; i < count; i++) {
    var randomX = random(0,width);
    var randomY = random(0,height);
    var circleX = width/2 + cos(angle*i)*300;
    var circleY = height/2 + sin(angle*i)*300;

    var x = lerp(randomX, circleX, faderX);
    var y = lerp(randomY, circleY, faderX);

    fill(0);
    ellipse(x,y,circleRadius,circleRadius);
  }


  var faderX = map(amplitudeShit3.getLevel(), 0, 1, 0, 1);
  var circleRadius = map(amplitudeShit3.getLevel(), 0, amplitudeShit3.getLevel(), 0, 6);
  var angle = radians(360/count);
  randomSeed(0);

  for (var i = 0; i < count; i++) {
    var randomX = random(0,width);
    var randomY = random(0,height);
    var circleX = width/2 + cos(angle*i)*300;
    var circleY = height/2 + sin(angle*i)*300;

    var x = lerp(randomX, circleX, faderX);
    var y = lerp(randomY, circleY, faderX);

    fill(0);
    ellipse(x,y,circleRadius,circleRadius);
  }

  var circleRadius2 = map(amplitudeShit1.getLevel(), 0, 1, 0, height/2);
  fill("#044DA1");
  ellipse(width/2,height/2,circleRadius2,circleRadius2);


  // var waveWeight1 = int(map(amplitudeShit5.getLevel(), 0, amplitudeShit5.getLevel(), 0, 8));
  // var angle = 0;
  // var angleStep = 180.0/40;
  // noFill();
  // strokeCap(ROUND);
  // strokeJoin(ROUND);
  // strokeWeight(waveWeight1);
  // stroke('#56D224');
  // beginShape();
  // for (var i = width/4; i < width/4*3; i++) {
  //   var py = height/2 + sin(radians(angle))*height/3*amplitudeShit5.getLevel()*1.5;
  //   angle += angleStep*0.9;
  //   vertex(i, py);
  // }
  // endShape();


  // var waveWeight2 = int(map(amplitudeShit6.getLevel(), 0, amplitudeShit6.getLevel(), 0, 8));
  // var angle = 0;
  // var angleStep = 180.0/40;
  // noFill();
  // strokeCap(ROUND);
  // strokeJoin(ROUND);
  // strokeWeight(waveWeight2);
  // stroke('#82D72A');
  // beginShape();
  // for (var i = width/4; i < width/4*3; i++) {
  //   var py = height/2 + sin(radians(angle))*height/3*amplitudeShit6.getLevel()*2;
  //   angle += angleStep*0.9;
  //   vertex(i, py);
  // }
  // endShape();


  var waveWeight3 = int(map(amplitudeShit7.getLevel(), 0, amplitudeShit7.getLevel(), 0, 8));
  var angle = 0;
  var angleStep = 180.0/40;
  noFill();
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(waveWeight3);
  stroke('#92E522');
  beginShape();
  for (var i = width/4; i < width/4*3; i++) {
    var py = height/2 + sin(radians(angle))*height/3*amplitudeShit7.getLevel()*4;
    angle += angleStep*0.9;
    vertex(i, py);
  }
  endShape();


  var waveWeight4 = int(map(amplitudeShit8.getLevel(), 0, amplitudeShit8.getLevel(), 0, 8));
  var angle = 0;
  var angleStep = 180.0/40;
  noFill();
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(waveWeight4);
  stroke('#E4FF5A');
  beginShape();
  for (var i = width/4; i < width/4*3; i++) {
    var py = height/2 + sin(radians(angle))*height/3*amplitudeShit8.getLevel()*6;
    angle += angleStep*0.9;
    vertex(i, py);
  }
  endShape();



  fill('#ED3124');
  noStroke();

  var numPoints = int(map(amplitudeShit9.getLevel()*1000, 0, width, 0, 1000));
  var angle = 0;
  var angleStep = 180.0/numPoints;

  beginShape(TRIANGLE_STRIP);
  outsideRadius = 100 + amplitudeShit9.getLevel()*1000;
  insideRadius = amplitudeShit9.getLevel()*1000;
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();



  fill('#ED3124');
  noStroke();
  var numPoints = int(map(amplitudeShit9.getLevel()*1000, 0, width, 0, 1000));
  var angle = 0;
  var angleStep = 180.0/numPoints;
  beginShape(TRIANGLE_STRIP);
  outsideRadius = 100 + amplitudeShit9.getLevel()*1000;
  insideRadius = amplitudeShit9.getLevel()*1000;
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();



  fill('#F0531A');
  noStroke();
  var numPoints = int(map(amplitudeShit10.getLevel()*1000, 0, width, 0, 1000));
  var angle = 0;
  var angleStep = 360.0/numPoints;
  beginShape(TRIANGLE_STRIP);
  outsideRadius = 100 + amplitudeShit10.getLevel()*1000;
  insideRadius = amplitudeShit10.getLevel()*1000;
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();




  fill('#F8941D');
  noStroke();
  var numPoints = int(map(amplitudeShit11.getLevel()*1000, 0, width, 0, 1000));
  var angle = 0;
  var angleStep = 360.0/numPoints;
  beginShape(TRIANGLE_STRIP);
  outsideRadius = 200 + amplitudeShit11.getLevel()*1000;
  insideRadius = amplitudeShit11.getLevel()*1000;
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();



  fill('#EDB824');
  noStroke();
  var numPoints = int(map(amplitudeShit12.getLevel()*1000, 0, width, 0, 1000));
  var angle = 0;
  var angleStep = 360.0/numPoints;
  beginShape(TRIANGLE_STRIP);
  outsideRadius = 200 + amplitudeShit12.getLevel()*500;
  insideRadius = amplitudeShit12.getLevel()*500;
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();



  fill('#FFFB38');
  noStroke();
  var numPoints = int(map(amplitudeShit13.getLevel()*1000, 0, width, 0, 1000));
  var angle = 0;
  var angleStep = 360.0/numPoints;
  beginShape(TRIANGLE_STRIP);
  outsideRadius = 200 + amplitudeShit13.getLevel()*500;
  insideRadius = amplitudeShit13.getLevel()*500;
  for (var i = 0; i <= numPoints; i++) {
    var px = triangleX + cos(radians(angle)) * outsideRadius;
    var py = triangleY + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = triangleX + cos(radians(angle)) * insideRadius;
    py = triangleY + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();



  fill("#6BBF71");
  var r = width * amplitudeShit15.getLevel();
  translate(width/2, height/2);
  beginShape();
    vertex(0, -r)
    quadraticVertex(r*2, -r, r*2, 0);
    quadraticVertex(r*2, r, 0, r);
    quadraticVertex(-r*2, r, -r*2, 0);
    quadraticVertex(-r*2, -r, 0, -r);
  endShape();


  // //
  // // fill("red");
  // var numPoints = int(map(amplitudeShit2.getLevel()*1000, 100, width, 4, 280));
  // var angle = 0;
  // var angleStep = 180.0/numPoints;

  // beginShape(TRIANGLE_STRIP);
  // outsideRadius = 240;
  // insideRadius = outsideRadius + amplitudeShit2.getLevel()*100;
  // for (var i = 0; i <= numPoints; i++) {
  //   var px = x + cos(radians(angle)) * outsideRadius;
  //   var py = y + sin(radians(angle)) * outsideRadius;
  //   angle += angleStep;
  //   vertex(px, py);
  //   px = x + cos(radians(angle)) * insideRadius;
  //   py = y + sin(radians(angle)) * insideRadius;
  //   vertex(px, py);
  //   angle += angleStep;
  // }
  // endShape();

  // //
  // // fill("yellow");
  // var numPoints = int(map(amplitudeShit3.getLevel()*1000, 100, width, 10, 280));
  // var angle = 0;
  // var angleStep = 180.0/numPoints;

  // beginShape(TRIANGLE_STRIP);
  // outsideRadius = 0;
  // insideRadius = outsideRadius + amplitudeShit3.getLevel()*300;
  // for (var i = 0; i <= numPoints; i++) {
  //   var px = x + cos(radians(angle)) * outsideRadius;
  //   var py = y + sin(radians(angle)) * outsideRadius;
  //   angle += angleStep;
  //   vertex(px, py);
  //   px = x + cos(radians(angle)) * insideRadius;
  //   py = y + sin(radians(angle)) * insideRadius;
  //   vertex(px, py);
  //   angle += angleStep;
  // }
  // endShape();

  // //
  // // fill("white");
  // // strokeWeight(2);
  // // stroke("black");
  // var numPoints = int(map(amplitudeShit4.getLevel()*1000, 100, width, 0, 1280));
  // var angle = 0;
  // var angleStep = 180.0/numPoints;

  // beginShape(TRIANGLE_STRIP);
  // outsideRadius = 0;
  // insideRadius = outsideRadius + amplitudeShit4.getLevel()*10000;
  // for (var i = 0; i <= numPoints; i++) {
  //   var px = x + cos(radians(angle)) * outsideRadius;
  //   var py = y + sin(radians(angle)) * outsideRadius;
  //   angle += angleStep;
  //   vertex(px, py);
  //   px = x + cos(radians(angle)) * insideRadius;
  //   py = y + sin(radians(angle)) * insideRadius;
  //   vertex(px, py);
  //   angle += angleStep;
  // }
  // endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
