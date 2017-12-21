function Thermostat(){
  this.temperature = 20
  this.powerSaving = true
};

Thermostat.prototype.up = function(n){
  console.log(this.powerSaving)
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
  console.log(this.temperature)
  this.temperature = 20
};
