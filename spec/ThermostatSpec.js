'use strict';

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature', () =>{
    it ('starts at 20 C', () =>{
      expect(thermostat.temp).toEqual(20);
    });

    it('starts at 20 C', () => {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('increases in temperature with up()', () => {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('decreases in temperature with down()', () => {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    });

    it('is minimum of 10 C', () => {
      for (let i = 0; i <= 10; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    it('has power saving mode on (default)', () =>{
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch power saving mode off', () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch power saving mode on', () => {
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    describe('when power saving mode is on', () => {
      it('has maximum temperature of 25 C', () => {
        for (let i = 0; i < 6; i++) {
          thermostat.up()
        }
        expect(thermostat.getCurrentTemp()).toEqual(25);
      });
    });

    describe('when power saving mode is off', () => {
      it('has maximum temperature of 32 C', () => {
        thermostat.switchPowerSavingModeOff();
        for (let i = 0; i < 13; i++) {
          thermostat.up()
        }
        expect(thermostat.getCurrentTemp()).toEqual(32);
      });
    });

    it('can be reset to default temperature', () => {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      }
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    describe('displaying usage levels', () => {
      describe('when the temperature is < 18 C', () => {
        it('it is considered low-usage', () => {
          for (let i = 0; i < 3; i++) {
            thermostat.down();
          }
          expect(thermostat.energyUsage()).toEqual('low-usage');
        });
      });
    
      describe('when the temperature is 18-25 C', () => {
        it('it is considered medium-usage', () => {
          expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
      });
    
      describe('when the temperature is > 25 C', () => {
        it('it is considered high-usage', () => {
          thermostat.switchPowerSavingModeOff();
          for (let i = 0; i < 6; i++) {
            thermostat.up();
          }
          expect(thermostat.energyUsage()).toEqual('high-usage');
        });
      });
    });
  });
});