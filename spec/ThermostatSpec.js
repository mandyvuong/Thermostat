'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

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
    })

    it('decreases in temperature with down()', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    })
  });
});