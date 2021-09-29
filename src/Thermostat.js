'use strict';

class Thermostat {
  constructor() {
    this.temp = 20;
    this.MIN_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.PowerSavingMode = true;
  }

  getCurrentTemp() {
    return this.temp;
  }

  up() {
    if (this.isMaxTemp()) {
      return;
    }
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

  isMaxTemp() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temp === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temp === this.MAX_LIMIT_PSM_ON;
  }

  isPowerSavingModeOn() {
    return this.PowerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.PowerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
}