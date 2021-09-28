'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature', function(){
    it ('starts at 20 C', function(){
      expect(thermostat.temp).toEqual(20);
    });

    it('starts at 20 C', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('increases in temperature with up()', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('decreases in temperature with down()', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    });

    it('is minimum of 10 C', function() {
      for (let i = 0; i <= 10; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    it('has power saving mode on (default)', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });
});