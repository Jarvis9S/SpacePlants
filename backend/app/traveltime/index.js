const Plant = require("../plant.js");
const { REFRESH_RATE, SECONDS } = require("../config.js");

const refreshRate = REFRESH_RATE * SECONDS;

class Traveltime {
  constructor() {
    this.expiration = this.calculateExpiration();
    this.travelId = undefined;
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newPlant() {
    if (Date.now() > this.expiration) {
      throw new Error(`This trip finished on ${this.expiration}`);
    }
    return new Plant();
  }
}

module.exports = Traveltime;
