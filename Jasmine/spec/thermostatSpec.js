describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe("Temperature up and down", function(){

    it("initialize a thermostat at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("increase the temperature with an up fonction", function(){
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it("decrease the temperature with an down fonction", function(){
      thermostat.down(5);
      expect(thermostat.temperature).toEqual(15);
    });

    it("has a minimum temperature of 10 degrees", function(){
      thermostat.down(12);
      expect(thermostat.temperature).toEqual(10);
    });

    it("has a minimum temperature of 10 degrees", function(){
      thermostat.down(12);
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe("Power saving mode", function(){

    it("sets max temperature to 25 when power saving mode is on", function(){
      thermostat.powerSavingMode();
      thermostat.up(10);
      expect(thermostat.temperature).toEqual(25);
    });

    it("sets max temperature to 32 when power saving mode is off", function(){
      thermostat.powerSavingModeOff();
      thermostat.up(14);
      expect(thermostat.temperature).toEqual(32);
    });

    it("initialize with a powersaving mode on by default", function(){
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe("Reset button", function(){

      it("reset the temperature to 20 with a reset function", function(){
        thermostat.reset()
        expect(thermostat.temperature).toEqual(20);
      });
  });

});
