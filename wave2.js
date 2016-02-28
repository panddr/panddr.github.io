function Wave2(amplitude) {
  this.theta = 0.0;      // Start angle at 0
  this.amplitude = amplitude;
  // this.amplitude = 25.0; // Height of wave
  // this.amplitude = amplitude; // Height of wave
  this.period = 200.0;   // How many pixels before the wave repeats
  // this.dx = dx;               // Value for incrementing x
  // this.yvalues = yvalues;  // Using an array to store height values for the wave
  this.randomX;
  this.randomY;
  this.randomAngle;

  this.init = function() {
    this.dx = TWO_PI / this.period;
    this.yvalues = new Array(floor(width));
    this.randomX = random(-400,200);
    this.randomY = random(300,600);
    this.randomAngle = PI/random(3,4);
  }

  this.calcWave = function() {
    this.level = this.amplitude.getLevel();
    this.size = map(this.level, 0, 1, 0, 175); // Height of wave
    this.weight = map(this.level, 0, 1, 0, 12500); // Height of wave
    this.freq = map(this.level, 0, 1, .1, .01); // Height of wave
    // this.length = map(this.level, 0, 1, 1000, floor(width)); // Height of wave
    push();

    // Increment theta (try different values for
    // 'angular velocity' here
    this.theta -= this.freq;

    // For every x value, calculate a y value with sine function
    var x = this.theta;

    // this.yvalues = new Array(this.length);

    for (var i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x)*this.size;
      x+=this.dx;
    }

    // if ( this.level == 0) {

    // } else {
    //   for (var i = 0; i < this.yvalues.length; i++) {
    //     this.yvalues[i] = sin(x)*this.size;
    //     x+=this.dx;
    //   }
    // }

    // translate(this.randomX,this.randomY);
    // rotate(this.randomAngle);
    // translate(0,100);
    // rotate(-PI*0.25);

    // fill('#034EA2');
    fill('#6CC071');
    beginShape();
    for (var x = 0; x < this.yvalues.length; x++) {
      // ellipse(x, height/2+yvalues[x], 16, 16);
      vertex(x, height/2+this.yvalues[x]);
    }
    // vertex(x, height/2 + this.weight);
    // vertex(0, height/2 + this.weight);
    for (var x = this.yvalues.length; x >= 0; x--) {
      vertex(x, height/2+this.yvalues[x] + this.weight);
    }
    endShape();
    pop();
  }

  // this.renderWave = function() {
    // fill('#034EA2');
    // beginShape();
    // for (var x = 0; x < this.yvalues.length-200; x++) {
    //   // ellipse(x, height/2+yvalues[x], 16, 16);
    //   vertex(x, height/2+this.yvalues[x]);
    // }
    // for (var x = this.yvalues.length-200; x >= 0; x--) {
    //   vertex(x, height/2+this.yvalues[x] + 80);
    // }
    // endShape();
    // pop();
  // }
}
