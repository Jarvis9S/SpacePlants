const Traveltime = require("./index.js");
const TravelTable = require("./table.js");

class TravelEngine {
  constructor() {
    this.travel = null;
    this.timer = null;
  }
  start() {
    this.buildNewTravel();
  }

  stop() {
    clearTimeout(this.timer);
  }

  buildNewTravel() {
    this.travel = new Traveltime();

    TravelTable.storeTravel(this.travel);

    console.log("new travel", this.travel);

    this.timer = setTimeout(
      () => this.buildNewTravel(),
      this.travel.expiration.getTime() - Date.now()
    );
  }
}

module.exports = TravelEngine;
