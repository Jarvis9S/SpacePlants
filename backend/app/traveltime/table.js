const pool = require("../../databasePool.js");

class TravelTable {
  static storeTravel(travel) {
    pool.query(
      "INSERT INTO traveltable(expiration) VALUES($1)",
      [travel.expiration],
      (error, response) => {
        if (error) return console.error(error);
      }
    );
  }
}

module.exports = TravelTable;
