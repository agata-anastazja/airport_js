'use strict';

describe('Plane',function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });



  it('should test that by default plane flying', function() {
    expect(plane.isFlying).toEqual(true);
  });

  it('should confirm the plane is no longer flying after landing', function() {
    plane.land();
    expect(plane.isFlying).toEqual(false);
  });

});
