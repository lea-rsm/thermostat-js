describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("initialize a thermostat at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increase the temperature with an up fonction", function(){
    thermostat.up(5)
    expect(thermostat.temperature).toEqual(25);
  });

  it("decrease the temperature with an down fonction", function(){
    thermostat.down(5)
    expect(thermostat.temperature).toEqual(15);
  });

  it("has a minimum temperature of 10 degrees", function(){
    thermostat.down(12)
    expect(thermostat.temperature).toEqual(10);
  });

});
