'use strict';

class Thermostat {
  constructor() {
    this.temp = 20;
  }

  getCurrentTemp() {
    return this.temp;
  }

  up() {
    this.temp += 1
  }

  down() {
    this.temp -=1
  }
}