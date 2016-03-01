function TriangleShape(amplitude, color, xoff, xoff2, xoff3, yoff, yoff2) {
  this.color = color;
  this.amplitude = amplitude;
  this.xoff = xoff;
  this.xoff2 = xoff2;
  this.xoff3 = xoff3;
  this.yoff = yoff;
  this.yoff2 = yoff2;

  this.draw = function() {
    var level = this.amplitude.getLevel();

    if (isEditing) {
      xoffCalc = this.xoff/4;
      xoff2Calc = this.xoff2/4;
      xoff3Calc = this.xoff3/4;
    } else {
      xoffCalc = map(level, 0, 1, 0, this.xoff);
      xoff2Calc = map(level, 0, 1, 0, this.xoff2);
      xoff3Calc = map(level, 0, 1, 0, this.xoff3);
    }
    fill(this.color);
    beginShape();
    vertex(width/2 - 1, this.yoff);
    vertex(width/2 - 1 - xoffCalc, this.yoff);
    vertex(width/2 - 1 - xoff2Calc, this.yoff2);
    vertex(width/2 - 1 - xoff3Calc, height - this.yoff);
    vertex(width/2 - 1, height - this.yoff);
    endShape();
  }
}
