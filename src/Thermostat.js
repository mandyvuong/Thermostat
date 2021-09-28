'use strict';

class Thermostat {
  constructor() {
    this.temp = 20;
    this.MIN_TEMP = 10;
    this.PowerSavingMode = true;
  }

  getCurrentTemp() {
    return this.temp;
  }

  up() {
    this.temp += 1
  }

  down() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1
  }

  isMinTemp() {
    return this.temp === this.MIN_TEMP;
  }

  isPowerSavingModeOn() {
    return this.PowerSavingMode === true;
  }
}