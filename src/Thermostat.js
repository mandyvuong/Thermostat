'use strict';

class Thermostat {
  constructor() {
    this.temp = 20;
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
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

  resetTemp() {
    this.temp = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temp <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
}

document.body.addEventListener('click', function(event) {
  console.log("Body clicked!");
});