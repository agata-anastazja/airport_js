var Airport = function() {
  this.planes = [];
};


Airport.prototype.authoriseLanding = function(plane, landed_planes) {
    plane.land();
    return  this.planes.push(plane);
};

Airport.prototype.is_landed = function(plane) {
  return  this.planes.includes(plane);
};
