'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
     expect(thermostat.getCurrentTemperature()).toEqual(20);
   });

   it('increases in temperature with up()', function() {
     thermostat.up();
     expect(thermostat.getCurrentTemperature()).toEqual(21);
   });

   it('decreases in temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a maximum temperature of 32 degrees when psm off', function() {
    // for (var i = 0; i < 12; i++) {
    //   thermostat.up();
    // }
    expect(thermostat.MAX_LIMIT_PSM_OFF).toEqual(32);
  });

    it('has power saving mode on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch power save mode off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch power save mode back on', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degress', function() {
      thermostat.switchPowerSavingModeOn();
      for(var i = 0; i < 5; i++)
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  it('can reset for default temperature', function() {
    for(var i = 0; i < 5; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('DISPLAY USAGE LEVEL', function() {

  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});

});
