function Particles(amplitude, color, x, y) {
  this.color = color;
  this.amplitude = amplitude;
  this.x = x;
  this.y = y;
  this.numParticles = 5;

  this.init = function() {
    this.xvalues = new Array(this.numParticles);
    this.yvalues = new Array(this.numParticles);

    for (var i = 0; i < this.numParticles; i++) {
      this.xvalues[i] = random(0,200);
      this.yvalues[i] = random(0,150);
    }
  }

  this.draw = function() {
    level = this.amplitude.getLevel();
    size = map(level, 0, 1, 0, 200);

    push();
    translate(this.x, this.y);
    fill(this.color);

    for (var i = 0; i < this.xvalues.length; i++) {
      ellipse(this.xvalues[i], this.yvalues[i], size, size);
    }

    pop();
  }
}
