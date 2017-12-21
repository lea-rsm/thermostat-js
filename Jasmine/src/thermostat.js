function Thermostat(){
  this.temperature = 20
};

Thermostat.prototype.up = function(n){
  this.temperature += n
};

Thermostat.prototype.down = function(n){
  if (this.temperature - n <= 10) {
    this.temperature = 10;
  }
  else {
    this.temperature -= n
  }

};
