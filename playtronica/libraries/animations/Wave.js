function Wave(amplitude, x, y, maxWeight, color) {
  this.theta = 0.0;      // Start angle at 0
  this.amplitude = amplitude;
  this.period = 150.0;   // How many pixels before the wave repeats
  this.x = x;
  this.y = y;
  this.maxWeight = maxWeight;
  this.color = color;
  this.dx = TWO_PI / this.period * random(1, 1.4);
  this.yvalues = new Array(floor(width/4));

  this.draw = function() {
    this.level = this.amplitude.getLevel();
    this.size = map(this.level, 0, 1, 10, 25); // Height of wave
    this.weight = map(this.level, 0, 1, 0, this.maxWeight); // Height of wave
    this.freq = map(this.level, 0, 1, 0, 1); // Height of wave
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

    translate(this.x,this.y);
    // rotate(-PI*0.25);

    fill(this.color);
    beginShape();
    for (var x = 0; x < this.yvalues.length; x++) {
      // ellipse(x, height/2+yvalues[x], 16, 16);
      vertex(x, this.yvalues[x]);
    }
    for (var x = this.yvalues.length; x >= 0; x--) {
      vertex(x, this.yvalues[x] + this.weight);
    }
    endShape();
    pop();
  }
}
