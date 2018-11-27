function Thermostat() {
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE; //added just in case on futher we want to change default temperature
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;              //so we dont have to change this one in code ass well just on the top
}

//check current temperature on termostat
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};
// turning up temperature
Thermostat.prototype.up = function() {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};
// turning down temperature
Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};
//minimum temperature on thermostat
Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};
//maximum temperature on thermostat
Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode === false) {
    //if power save mode is off then max temperature is 32
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  } //if power save mode is on then max temperature is 25
    return this.temperature === this.MAX_LIMIT_PSM_ON
};
//check is power saving mode on
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};
//switching powerSavingMode OFF
Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
};
//switch powrSavingMode ON
Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
};
//reseting temperature to starting temperature which is 20
Thermostat.prototype.resetTemperature = function() {
  return this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  //medium energy usage == 18
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  } //medium usage if temperature beetwen 18 and 25
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  } //over 25 temperature high usage
  return 'high-usage';
}
 //reseting temperature when is bigger then 25
Thermostat.prototype.resetAfterPswOn = function () {
  if(this.powerSavingMode === true) {
  return this.temperature = 25;
};
}
