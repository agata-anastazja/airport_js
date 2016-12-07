describe('Plane', function() {

  var plane;

  beforeEach(function() {

    plane = new Plane();
  });

  it('should test that by default plane flying', function() {
    expect(plane.isFlying()).toEqual(true);
  });
});
