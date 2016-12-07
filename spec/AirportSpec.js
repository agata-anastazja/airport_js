'use strict';

describe("Airport", function() {

var airport;
var plane;
var weather; 


  beforeEach(function() {
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land']);
     weather = jasmine.createSpyObj('weather', ['isStormy']);

  });

  it("should confirm if plane hasn't landed", function() {
    expect(airport.is_landed(plane)).toEqual(false);
  });

  it('should clear plane for landing', function() {
    airport.authoriseLanding(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it("should authorise a plane to land", function() {
    weather.isStormy.and.returnValue(false);

    airport.authoriseLanding(plane);
    expect(airport.is_landed(plane)).toEqual(true);
  });

  it('should authorise a take off', function(){
    weather.isStormy.and.returnValue(false);
    airport.authoriseLanding(plane);
    airport.authoriseTakeOff(plane);
    expect(airport.is_landed(plane)).toEqual(false);
  });


});
