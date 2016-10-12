function setup() {
  midi();
  createCanvas(windowWidth, windowHeight);

  animationInit = [];

  for (var i = 0; i < dataP5.length; i++) {
    var amplitude;
    amplitude = new p5.Amplitude();
    amplitude.setInput(dataP5[i].sound);
    if (dataP5[i].animation == "TriangleShape") {
      animationInit.push(eval('new ' + dataP5[i].animation + '(amplitude, "#DA322A", 1000, 300, 1600, height/10, height/3)'));
    } else if (dataP5[i].animation == "Wave") {
      animationInit.push(eval('new ' + dataP5[i].animation + '(amplitude, width/4, height/4, 100, "#97E48B")'));
    }
  }
}

function draw() {
  background(255);
  noStroke();

  for (var i = 0; i < dataP5.length; i++) {
    animationInit[i].draw();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
