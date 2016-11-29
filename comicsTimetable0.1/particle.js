var Particle = function(x, y) {
  x = this.x;
  y = this.y;



  this.display = function() {
    fill(0);
    ellipse(x, y, 10, 10);
  }
}