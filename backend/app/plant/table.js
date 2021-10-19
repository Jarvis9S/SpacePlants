const pool = require("../../databasePool");

class PlantTable {
  static storePlant(plant) {
    const { collectdate, nickname, travelId } = plant;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO planttable(collectdate, nickname, "travelId") VALUES($1,$2,$3) RETURNING id`,
        [collectdate, nickname, travelId],
        (error, response) => {
          if (error) return reject(error);

          const plantId = response.rows[0].id;

          resolve({ plantId });
        }
      );
    });
  }
}

module.exports = PlantTable;
