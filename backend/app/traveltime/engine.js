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
    const travel = new Traveltime();

    TravelTable.storeTravel(travel)
      .then(({ travelId }) => {
        this.travel = travel;
        this.travel.travelId = travelId;

        console.log("new travel", this.travel);

        this.timer = setTimeout(
          () => this.buildNewTravel(),
          this.travel.expiration.getTime() - Date.now()
        );
      })
      .catch((error) => console.error(error));
  }
}

module.exports = TravelEngine;
