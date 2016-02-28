function Sticks(amplitude, color, x, y) {
  this.amplitude = amplitude;
  this.x = x;
  this.y = y;
  this.insideRadius = 40;
  this.outsideRadius = 70;
  this.numSticks = 5;
  this.xInsideValues = new Array(this.numSticks);
  this.yInsideValues = new Array(this.numSticks);
  this.xOutsideValues = new Array(this.numSticks);
  this.yOutsideValues = new Array(this.numSticks);
  this.angleStep = 180/this.numSticks;
  this.angle = 0;

  this.init = function() {
    for (var i = 0; i < this.numSticks; i++) {
      this.xInsideValues[i] = cos(this.angle) * this.insideRadius + random(0,-10);
      this.yInsideValues[i] = sin(this.angle) * this.insideRadius + random(0,-10);
      this.xOutsideValues[i] = cos(this.angle) * this.outsideRadius + random(0,-10);
      this.yOutsideValues[i] = sin(this.angle) * this.outsideRadius + random(0,-10);
      this.angle += this.angleStep;
    }
  }

  this.draw = function() {
    level = this.amplitude.getLevel();
    size = map(level, 0, 1, 0, 30);

    push();
    translate(this.x, this.y);
    stroke(0);
    strokeCap(PROJECT);
    strokeWeight(size);

    for (var i = 0; i < this.numSticks; i++) {
      line(this.xInsideValues[i], this.yInsideValues[i], this.xOutsideValues[i], this.yOutsideValues[i]);
    }

    pop();
  }
}
