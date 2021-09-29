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

    it('can switch power saving mode off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch power saving mode on', function() {
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    describe('when power saving mode is on', function() {
      it('has maximum temperature of 25 C', function() {
        for (let i = 0; i < 6; i++) {
          thermostat.up()
        }
        expect(thermostat.getCurrentTemp()).toEqual(25);
      });
    });

    describe('when power saving mode is off', function() {
      it('has maximum temperature of 32 C', function() {
        thermostat.switchPowerSavingModeOff();
        for (let i = 0; i < 13; i++) {
          thermostat.up()
        }
        expect(thermostat.getCurrentTemp()).toEqual(32);
      });
    });

    it('can be reset to default temperature', function() {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      }
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });
  });
});