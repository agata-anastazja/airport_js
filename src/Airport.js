var Airport = function(weather) {
  this.planes = [];
  this._weather =  weather ;
};


Airport.prototype.authoriseLanding = function(plane, landed_planes) {
    if(this._weather.isStormy())
      throw "Stormy! Can't land!";
    else
      plane.land();
      return  this.planes.push(plane);

};

Airport.prototype.is_landed = function(plane) {
  return  this.planes.includes(plane);
};

Airport.prototype.authoriseTakeOff = function(plane, landed_planes) {
  return  this.planes.shift(plane);
};
