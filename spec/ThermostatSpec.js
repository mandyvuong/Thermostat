'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('thermostat temperature', function(){
    it ('at 20 C', function(){
      expect(thermostat.temp).toEqual(20);
    });
  });
});