var Plane = function() {
  this.isFlying= true;
};


Plane.prototype.land = function() {
  return this.isFlying = false;

};
