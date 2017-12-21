'use strict';

function Thermostat(){
  this.temperature = 20
  this.powerSaving = true

};

Thermostat.prototype.up = function(n){

  if (this.powerSaving === true) {
    if (this.temperature + n >= 25) {
      this.temperature = 25
    };
  } else if (this.powerSaving === false) {
    if (this.temperature + n >= 32) {
        this.temperature = 32
    };
  } else {
    this.temperature += n
  };
};

Thermostat.prototype.down = function(n){
  if (this.temperature - n <= 10) {
    this.temperature = 10;
  }
  else {
    this.temperature -= n
  };
};

Thermostat.prototype.powerSavingMode = function(){
  this.powerSaving = true
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSaving = false
};

Thermostat.prototype.reset = function(){

  this.temperature = 20
};

Thermostat.prototype.currentEnergyUsage = function(){
  switch(true){
  case  (this.temperature < 18):
    return "low-usage"
    break;
  case (this.temperature < 25):
  return "medium-usage"
  break;
  case (this.temperature >= 25):
  return "high-usage"
  break;
  };

};
