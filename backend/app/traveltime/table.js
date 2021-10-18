const pool = require("../../databasePool.js");

class TravelTable {
  static storeTravel(travel) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO traveltable(expiration) VALUES($1) RETURNING id",
        [travel.expiration],
        (error, response) => {
          if (error) return console.error(error);

          const travelId = response.rows[0].id;

          resolve({ travelId });
        }
      );
    });
  }
}

module.exports = TravelTable;
