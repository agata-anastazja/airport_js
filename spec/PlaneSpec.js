describe('Plane', function() {

  var plane;

  beforeEach(function() {

    plane = new Plane();
  });

  it('should test that by default plane flying', function() {
    expect(plane.isFlying).toEqual(true);
  });

  it('should confirm the plane is no longer flying after landing', function() {
    plane.land();
    expect(plane.isFlying).toEqual(false);
  });


});
