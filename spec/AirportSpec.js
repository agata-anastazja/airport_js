'use strict';

describe("Airport", function() {

var airport;
var plane;


  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it("should confirm if plane hasn't landed", function() {
    expect(airport.is_landed(plane)).toEqual(false);
  });

  it('should clear plane for landing', function() {
    airport.authoriseLanding(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it("should authorise a plane to land", function() {
    airport.authoriseLanding(plane);
    expect(airport.is_landed(plane)).toEqual(true);
  });
});
